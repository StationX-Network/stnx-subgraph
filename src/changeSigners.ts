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
      user.depositAmount = BigInt.fromI32(0);
      user.timeStamp = event.block.timestamp;
      user.gtAmount = BigInt.fromI32(0);
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
      if (user.gtAmount == BigInt.fromI32(0)) {
        user.isActive = false;
      } else {
        user.isAdmin = false;
      }

      user.transactionHash = event.transaction.hash.toHexString();
      user.save();
    }
  }
}
