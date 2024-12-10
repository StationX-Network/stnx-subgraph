import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ChangedSigners as ChangedSignersEvent } from "../generated/StnxEmitter/StnxEmitter";
import { Station, User } from "../generated/schema";

export function changeSigners(event: ChangedSignersEvent) {
  let station = Station.load(event.params._daoAddress.toHex());
  if (!station) return;

  let id =
    event.params._signer.toHex() + "-" + event.params._daoAddress.toHex();

  let user = User.load(id);

  if (event.params._isAdded == true) {
    if (user) {
      user.isAdmin = true;
      user.save();
    } else {
      const user = new User(id);

      user.daoAddress = event.params._daoAddress;
      user.userAddress = event.params._signer;
      user.tokenAddress = station.depositTokenAddress as unknown as Bytes;
      user.depositAmount = BigInt.fromI32(0);
      user.timeStamp = event.block.timestamp;
      user.gtAmount = BigInt.fromI32(0);
      user.isAdmin = true;
      user.daoName = station.name;
      user.save();
    }
  } else {
    if (user) {
      if (user.gtAmount == BigInt.fromI32(0)) {
        user.daoAddress = "0x123456789qwertyuiop" as unknown as Bytes;
        user.save();
      } else {
        user.isAdmin = false;
        user.save();
      }
    }
  }
}
