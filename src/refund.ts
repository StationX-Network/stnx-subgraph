import { BigInt } from "@graphprotocol/graph-ts";
import {
  RefundERC20DAO as RefundERC20DAOEvent,
  RefundERC721DAO as RefundERC721DAOEvent,
} from "../generated/StnxEmitter/StnxEmitter";
import { User } from "../generated/schema";

export function refundErc20(event: RefundERC20DAOEvent): void {
  let id = event.params._user.toHex() + "-" + event.params._daoAddress.toHex();

  let user = User.load(id);

  if (!user) return;

  user.gtAmount = user.gtAmount.minus(event.params._burnAmount);
  user.save();
}

export function refundErc721(event: RefundERC721DAOEvent): void {
  let id = event.params._user.toHex() + "-" + event.params._daoAddress.toHex();

  let user = User.load(id);

  if (!user) return;

  user.gtAmount = user.gtAmount.minus(
    BigInt.fromI32(event.params._tokenId?.length) || 0
  );

  user.save();
}
