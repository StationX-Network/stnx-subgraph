import { BigInt } from "@graphprotocol/graph-ts";

import { Station } from "../generated/schema";
import {
  UpdatePricePerToken as UpdatePricePerTokenEvent,
  UpdateDistributionAmount as UpdateDistributionAmountEvent,
} from "../generated/StnxEmitter/StnxEmitter";

export function updatePricePerToken(event: UpdatePricePerTokenEvent): void {
  let daoAddress = event.params._daoAddress.toHex();
  let station = Station.load(daoAddress);
  if (!station) return;

  station.pricePerToken = event.params._amount.toString();
  station.transactionHash = event.transaction.hash.toHex();
  station.blockNumber = event.block.number;
  station.save();
}

export function updateDistributionAmount(
  event: UpdateDistributionAmountEvent
): void {
  let daoAddress = event.params._daoAddress.toHex();
  let station = Station.load(daoAddress);

  if (!station) return;

  // Ensure that pricePerToken and other properties are initialized and not null
  if (!station.pricePerToken) {
    station.pricePerToken = BigInt.fromI32(1).toString(); // Or some default value
  }

  station.distributionAmount = event.params._amount.toString();
  station.raiseAmount = event.params._amount
    .times(BigInt.fromString(station.pricePerToken))
    .div(BigInt.fromI32(10).pow(18))
    .toString();
  station.transactionHash = event.transaction.hash.toHex();
  station.blockNumber = event.block.number;

  // Save the updated entity
  station.save();
}
