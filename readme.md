# Subgraph Deployment Script

This repository contains a Bash script (`deploy.sh`) to automate the deployment of subgraphs for multiple blockchain networks. The script supports deploying to all chains or a specific chain, and it includes the following networks:

## Prerequisites

Before using the script, ensure you have the following installed:

1. **Node.js** and **npm**: Required for running the subgraph build and deployment commands.
2. **Goldsky CLI**: Required for deploying the subgraph. Install it globally using npm:
   `npm install -g @goldsky/goldsky-cli`

## Usage

1. **Make the script executable**:`chmod +x ./deploy.sh`
2. **Deploy all chains**: `./deploy.sh <version>`
3. **Deploy specific chain**: `./deploy.sh <version> <chain>`
