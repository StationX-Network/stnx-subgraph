import { BigInt } from "@graphprotocol/graph-ts"

import { Station } from "../generated/schema"
import {
  UpdatePricePerToken as UpdatePricePerTokenEvent,
  UpdateDistributionAmount as UpdateDistributionAmountEvent,
} from "../generated/StnxEmitter/StnxEmitter"

export function updatePricePerToken(event: UpdatePricePerTokenEvent): void {
  let daoAddress = event.params._daoAddress.toHex()
  let station = new Station(daoAddress)
  if (!station) return

  station.pricePerToken = event.params._amount
  station.save()
}

export function updateDistributionAmount(
  event: UpdateDistributionAmountEvent
): void {
  let daoAddress = event.params._daoAddress.toHex()
  let station = Station.load(daoAddress)

  // Create a new Station if it doesn't exist
  if (!station) {
    station = new Station(daoAddress)
    // Initialize any default properties here
  }

  // Ensure that pricePerToken and other properties are initialized and not null
  if (!station.pricePerToken) {
    station.pricePerToken = BigInt.fromI32(1) // Or some default value
  }

  station.distributionAmount = event.params._amount
  station.raiseAmount = event.params._amount
    .times(station.pricePerToken)
    .div(BigInt.fromI32(10).pow(18))

  // Save the updated entity
  station.save()
}
