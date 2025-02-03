import { BigInt } from "@graphprotocol/graph-ts"

import { Station, User } from "../generated/schema"
import { NewUser as NewUserEvent } from "../generated/StnxEmitter/StnxEmitter"
import { ENTITY_USER } from "./constants"

export function createNewUser(event: NewUserEvent): void {
  let id =
    event.params._depositor.toHex() + "-" + event.params._daoAddress.toHex()
  let user = User.load(id)
  let isNewUser = !user

  let daoAddress = event.params._daoAddress.toHex()
  let station = Station.load(daoAddress)
  if (!station) return

  if (!user) {
    // Create a new user entity if none exists
    user = new User(id)
    user.daoAddress = event.params._daoAddress.toHexString()
    user.userAddress = event.params._depositor.toHexString()
    user.tokenAddress = event.params._depositTokenAddress.toHexString()
    user.depositAmount = event.params._depositTokenAmount
    user.timeStamp = event.params._timeStamp
    user.gtAmount = event.params._gtToken
    user.isAdmin = event.params._isAdmin
    user.daoName = station.name
    user.isActive = true
  } else {
    // Update the depositAmount field for the existing user entity
    user.depositAmount = user.depositAmount.plus(
      event.params._depositTokenAmount
    )
    user.gtAmount = user.gtAmount.plus(event.params._gtToken)
    user.daoName = station.name
    user.isActive = true
  }

  user.transactionHash = event.transaction.hash.toHexString()
  user.entity = ENTITY_USER
  user.save()

  // Update members count & totalAmountRaised in station
  if (isNewUser)
    station.membersCount = station.membersCount.plus(BigInt.fromI32(1))

  station.totalAmountRaised = station.totalAmountRaised.plus(
    event.params._depositTokenAmount
  )
  station.save()
}
