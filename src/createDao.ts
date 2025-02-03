import { BigInt } from "@graphprotocol/graph-ts"

import { Station } from "../generated/schema"
import {
  CreateDaoErc20 as CreateDaoErc20Event,
  CreateDaoErc721 as CreateDaoErc721Event,
} from "../generated/StnxEmitter/StnxEmitter"
import { ENTITY_STATION } from "./constants"

export function createErc20Dao(event: CreateDaoErc20Event): void {
  let station = new Station(event.params.proxy.toHex())
  station.daoAddress = event.params.proxy.toHexString()
  station.gnosisAddress = event.params.gnosisAddress.toHexString()
  station.ownerAddress = event.params.deployerAddress.toHexString()
  station.name = event.params.name
  station.symbol = event.params.symbol
  station.imageUrl = ""
  station.tokenType = "erc20"
  station.isGtTransferable = event.params.isTransferable
  station.isGovernanceActive = event.params.isGovernanceActive
  station.membersCount = BigInt.fromI32(0)
  station.totalAmountRaised = BigInt.fromI32(0)
  station.timeStamp = event.block.timestamp
  station.distributionAmount = event.params.distributionAmount
  station.raiseAmount = event.params.distributionAmount
    .times(event.params.pricePerToken)
    .div(BigInt.fromI32(10).pow(18))
  station.pricePerToken = event.params.pricePerToken
  station.quorum = event.params.quorum.div(BigInt.fromI32(100))
  station.threshold = event.params.threshold.div(BigInt.fromI32(100))
  station.minDepositAmount = event.params.minDeposit
  station.maxDepositAmount = event.params.maxDeposit
  station.depositDeadline = event.params._days
  station.maxTokensPerUser = BigInt.fromI32(0)
  station.depositTokenAddress = event.params.depositTokenAddress
    ? event.params.depositTokenAddress.toHex()
    : ""
  station.transactionHash = event.transaction.hash.toHexString()
  station.entity = ENTITY_STATION
  station.save()
}

export function createErc721Dao(event: CreateDaoErc721Event): void {
  let station = new Station(event.params.proxy.toHex())
  station.daoAddress = event.params.proxy.toHexString()
  station.gnosisAddress = event.params.gnosisAddress.toHexString()
  station.ownerAddress = event.params.deployerAddress.toHexString()
  station.name = event.params.name
  station.symbol = event.params.symbol
  station.imageUrl = event.params.tokenURI
  station.tokenType = "erc721"
  station.isGtTransferable = event.params.isTransferable
  station.isGovernanceActive = event.params.isGovernanceActive
  station.membersCount = BigInt.fromI32(0)
  station.totalAmountRaised = BigInt.fromI32(0)
  station.timeStamp = event.block.timestamp
  station.distributionAmount = event.params.distributionAmount
  station.raiseAmount = event.params.distributionAmount
    .times(event.params.pricePerToken)
    .div(BigInt.fromI32(10).pow(18))
  station.pricePerToken = event.params.pricePerToken
  station.quorum = event.params.quorum.div(BigInt.fromI32(100))
  station.threshold = event.params.threshold.div(BigInt.fromI32(100))
  station.minDepositAmount = BigInt.fromI32(0)
  station.maxDepositAmount = BigInt.fromI32(0)
  station.depositDeadline = event.params._days
  station.maxTokensPerUser = event.params.maxTokensPerUser
  station.depositTokenAddress = event.params.depositTokenAddress
    ? event.params.depositTokenAddress.toHex()
    : ""
  station.transactionHash = event.transaction.hash.toHexString()
  station.entity = ENTITY_STATION
  station.save()
}
