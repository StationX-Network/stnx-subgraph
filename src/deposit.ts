import { Station } from "../generated/schema";
import { StartDeposit as StartDepositEvent } from "../generated/StnxEmitter/StnxEmitter";

// export function newDeposit(event: DepositedEvent): void {
//   let id = event.block.hash.toHex();

//   let deposit = new Deposit(id);
//   deposit.adminShare = event.params._adminShare;
//   deposit.amount = event.params._amount;
//   deposit.daoAddress = event.params._daoAddress.toHexString();
//   deposit.depositTokenAddress = event.params._depositTokenAddress.toHexString();
//   deposit.depositor = event.params._depositor.toHexString();
//   deposit.timeStamp = event.params._timeStamp;
//   deposit.ownerFee = event.params._ownerFee;
//   deposit.save();
// }

export function startDeposit(event: StartDepositEvent): void {
  let station = Station.load(event.params._proxy.toHex());

  if (!station) return;

  station.depositDeadline = event.params.closeTime.toString();
  station.save();
}
