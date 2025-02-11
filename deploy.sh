#!/bin/bash

# Check if version argument is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a version number"
    echo "Usage: ./deploy.sh <version>"
    exit 1
fi

VERSION=$1

# Array of chain names (extracted from yaml files)
CHAINS=("arbitrum" "avax" "base" "bsc" "eth" "linea" "polygon")

# Function to deploy subgraph for a specific chain
deploy_subgraph() {
    local chain=$1
    local yaml_file="${chain}.subgraph.yaml"
    
    echo "🚀 Deploying subgraph for ${chain}..."
    
    # Run codegen
    echo "Running codegen..."
    npm run codegen ${yaml_file}
    if [ $? -ne 0 ]; then
        echo "❌ Codegen failed for ${chain}"
        return 1
    fi
    
    # Run build
    echo "Running build..."
    npm run build ${yaml_file}
    if [ $? -ne 0 ]; then
        echo "❌ Build failed for ${chain}"
        return 1
    fi
    
    # Deploy subgraph
    echo "Deploying..."
    goldsky subgraph deploy "station-${chain}/${VERSION}" --path .
    if [ $? -ne 0 ]; then
        echo "❌ Deployment failed for ${chain}"
        return 1
    fi
    
    echo "✅ Successfully deployed subgraph for ${chain}"
    echo "-------------------------------------------"
}

# Main execution
echo "🎮 Starting deployment for all networks (version: ${VERSION})"
echo "-------------------------------------------"

# Deploy for each chain
for chain in "${CHAINS[@]}"; do
    deploy_subgraph "$chain"
    if [ $? -ne 0 ]; then
        echo "⚠️ Deployment failed for ${chain}, continuing with next chain..."
    fi
done

echo "🏁 Deployment process completed!"