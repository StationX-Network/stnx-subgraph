import { BigInt } from "@graphprotocol/graph-ts";

import { Station } from "../generated/schema";
import {
  CreateDaoErc20 as CreateDaoErc20Event,
  CreateDaoErc721 as CreateDaoErc721Event,
} from "../generated/StnxEmitter/StnxEmitter";
import { ENTITY_STATION } from "./constants";
import { EmitterAddresses } from "./constants/config";

export function createErc20Dao(event: CreateDaoErc20Event): void {
  // to handle bug: interchanged values in depositTokenAddress and emitterAddress
  let depositTokenAddressUpdated = event.params.depositTokenAddress.toHexString();
  let isInterchanged = false;

  for (let i = 0; i < EmitterAddresses.length; i++) {
    if (
      EmitterAddresses[i].toLowerCase() ===
      depositTokenAddressUpdated.toLowerCase()
    ) {
      isInterchanged = true;
      break;
    }
  }

  if (isInterchanged) {
    depositTokenAddressUpdated = event.params.emitter.toHexString();
  }

  let station = new Station(event.params.proxy.toHex());
  station.daoAddress = event.params.proxy.toHexString();
  station.gnosisAddress = event.params.gnosisAddress.toHexString();
  station.ownerAddress = event.params.deployerAddress.toHexString();
  station.name = event.params.name;
  station.symbol = event.params.symbol;
  station.imageUrl = "";
  station.tokenType = "erc20";
  station.isGtTransferable = event.params.isTransferable;
  station.isGovernanceActive = event.params.isGovernanceActive;
  station.membersCount = BigInt.fromI32(0).toString();
  station.totalAmountRaised = BigInt.fromI32(0).toString();
  station.timeStamp = event.block.timestamp.toString();
  station.distributionAmount = event.params.distributionAmount.toString();
  station.raiseAmount = event.params.distributionAmount
    .times(event.params.pricePerToken)
    .div(BigInt.fromI32(10).pow(18))
    .toString();
  station.pricePerToken = event.params.pricePerToken.toString();
  station.quorum = event.params.quorum.div(BigInt.fromI32(100)).toString();
  station.threshold = event.params.threshold
    .div(BigInt.fromI32(100))
    .toString();
  station.minDepositAmount = event.params.minDeposit.toString();
  station.maxDepositAmount = event.params.maxDeposit.toString();
  station.depositDeadline = event.params._days.toString();
  station.maxTokensPerUser = BigInt.fromI32(0).toString();
  station.depositTokenAddress = depositTokenAddressUpdated
    ? depositTokenAddressUpdated
    : "";
  station.transactionHash = event.transaction.hash.toHexString();
  station.blockNumber = event.block.number;
  station.entity = ENTITY_STATION;
  station.save();
}

export function createErc721Dao(event: CreateDaoErc721Event): void {
  // to handle bug: interchanged values in depositTokenAddress and emitterAddress
  let depositTokenAddressUpdated = event.params.depositTokenAddress.toHexString();
  let isInterchanged = false;

  for (let i = 0; i < EmitterAddresses.length; i++) {
    if (
      EmitterAddresses[i].toLowerCase() ===
      depositTokenAddressUpdated.toLowerCase()
    ) {
      isInterchanged = true;
      break;
    }
  }

  if (isInterchanged) {
    depositTokenAddressUpdated = event.params.emitter.toHexString();
  }

  let station = new Station(event.params.proxy.toHex());
  station.daoAddress = event.params.proxy.toHexString();
  station.gnosisAddress = event.params.gnosisAddress.toHexString();
  station.ownerAddress = event.params.deployerAddress.toHexString();
  station.name = event.params.name;
  station.symbol = event.params.symbol;
  station.imageUrl = event.params.tokenURI;
  station.tokenType = "erc721";
  station.isGtTransferable = event.params.isTransferable;
  station.isGovernanceActive = event.params.isGovernanceActive;
  station.membersCount = BigInt.fromI32(0).toString();
  station.totalAmountRaised = BigInt.fromI32(0).toString();
  station.timeStamp = event.block.timestamp.toString();
  station.distributionAmount = event.params.distributionAmount.toString();
  station.raiseAmount = event.params.distributionAmount
    .times(event.params.pricePerToken)
    .div(BigInt.fromI32(10).pow(18))
    .toString();
  station.pricePerToken = event.params.pricePerToken.toString();
  station.quorum = event.params.quorum.div(BigInt.fromI32(100)).toString();
  station.threshold = event.params.threshold
    .div(BigInt.fromI32(100))
    .toString();
  station.minDepositAmount = BigInt.fromI32(0).toString();
  station.maxDepositAmount = BigInt.fromI32(0).toString();
  station.depositDeadline = event.params._days.toString();
  station.maxTokensPerUser = event.params.maxTokensPerUser.toString();
  station.depositTokenAddress = depositTokenAddressUpdated
    ? depositTokenAddressUpdated
    : "";
  station.transactionHash = event.transaction.hash.toHexString();
  station.blockNumber = event.block.number;
  station.entity = ENTITY_STATION;
  station.save();
}
