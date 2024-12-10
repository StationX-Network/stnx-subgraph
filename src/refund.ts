import { BigInt } from "@graphprotocol/graph-ts";
import { User } from "../generated/schema";
import {
  RefundERC721DAO as RefundERC721DAOEvent,
  RefundERC20DAO as RefundERC20DAOEvent,
} from "../generated/StnxEmitter/StnxEmitter";

export function refundErc721(event: RefundERC721DAOEvent): void {
  let id = event.params._user.toHex() + "-" + event.params._daoAddress.toHex();

  let user = User.load(id);

  if (!user) return;

  // Ensure _tokenId exists and calculate its length properly
  let tokenIdLength = event.params._tokenId ? event.params._tokenId.length : 0;

  // Safely subtract the calculated value
  user.gtAmount = user.gtAmount.minus(BigInt.fromI32(tokenIdLength));

  user.save();
}

export function refundErc20(event: RefundERC20DAOEvent): void {
  let id = event.params._user.toHex() + "-" + event.params._daoAddress.toHex();

  let user = User.load(id);

  if (!user) return;

  user.gtAmount = user.gtAmount.minus(event.params._burnAmount);
  user.save();
}
