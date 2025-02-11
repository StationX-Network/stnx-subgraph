import { BigInt, Bytes } from "@graphprotocol/graph-ts";

import { Station, User } from "../generated/schema";
import { ChangedSigners as ChangedSignersEvent } from "../generated/StnxEmitter/StnxEmitter";
import { ENTITY_USER } from "./constants";

export function changeSigners(event: ChangedSignersEvent): void {
  let station = Station.load(event.params._daoAddress.toHex());
  if (!station) return;

  let id =
    event.params._signer.toHex() + "-" + event.params._daoAddress.toHex();

  let user = User.load(id);

  if (event.params._isAdded == true) {
    if (user) {
      user.isAdmin = true;
    } else {
      user = new User(id);
      user.daoAddress = event.params._daoAddress.toHexString();
      user.userAddress = event.params._signer.toHexString();
      user.tokenAddress = Bytes.fromHexString(
        station.depositTokenAddress
      ).toHexString();
      user.depositAmount = BigInt.fromI32(0).toString();
      user.timeStamp = event.block.timestamp.toString();
      user.gtAmount = BigInt.fromI32(0).toString();
      user.isAdmin = true;
      user.daoName = station.name;
      user.isActive = true;
      user.entity = ENTITY_USER;
    }

    user.transactionHash = event.transaction.hash.toHexString();
    user.blockNumber = event.block.number;
    user.save();
  } else {
    if (user) {
      if (BigInt.fromString(user.gtAmount) == BigInt.fromI32(0)) {
        user.isActive = false;

        //decrease member count
        station.membersCount = BigInt.fromString(station.membersCount)
          .minus(BigInt.fromI32(1))
          .toString();
        station.transactionHash = event.transaction.hash.toHexString();
        station.blockNumber = event.block.number;
        station.save();
      }

      user.isAdmin = false;
      user.transactionHash = event.transaction.hash.toHexString();
      user.blockNumber = event.block.number;
      user.save();
    }
  }
}
