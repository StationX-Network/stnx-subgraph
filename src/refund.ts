import { BigInt } from "@graphprotocol/graph-ts"

import { Station, User } from "../generated/schema"
import {
  RefundERC20DAO as RefundERC20DAOEvent,
  RefundERC721DAO as RefundERC721DAOEvent,
} from "../generated/StnxEmitter/StnxEmitter"

export function refundErc721(event: RefundERC721DAOEvent): void {
  let id = event.params._user.toHex() + "-" + event.params._daoAddress.toHex()
  let user = User.load(id)
  if (!user) return

  let tokenIdLength = event.params._tokenId ? event.params._tokenId.length : 0
  const finalGtAmount = BigInt.fromString(user.gtAmount).minus(
    BigInt.fromI32(tokenIdLength)
  )

  if (finalGtAmount.le(BigInt.fromI32(0))) user.isActive = false

  user.gtAmount = finalGtAmount.toString()
  user.save()

  const station = Station.load(event.params._daoAddress.toHex())
  if (!station) return

  if (finalGtAmount.le(BigInt.fromI32(0))) {
    station.membersCount = BigInt.fromString(station.membersCount)
      .minus(BigInt.fromI32(1))
      .toString()
    station.save()
  }
}

export function refundErc20(event: RefundERC20DAOEvent): void {
  let id = event.params._user.toHex() + "-" + event.params._daoAddress.toHex()
  let user = User.load(id)
  if (!user) return

  const finalGtAmount = BigInt.fromString(user.gtAmount).minus(
    event.params._burnAmount
  )

  if (finalGtAmount.le(BigInt.fromI32(0))) user.isActive = false

  user.gtAmount = finalGtAmount.toString()
  user.save()

  const station = Station.load(event.params._daoAddress.toHex())
  if (!station) return

  if (finalGtAmount.le(BigInt.fromI32(0))) {
    station.membersCount = BigInt.fromString(station.membersCount)
      .minus(BigInt.fromI32(1))
      .toString()
    station.save()
  }
}
