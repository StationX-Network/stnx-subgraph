import { Deposit } from "../generated/schema"
import { Deposited as DepositedEvent } from "../generated/StnxEmitter/StnxEmitter"

export function newDeposit(event: DepositedEvent): void {
  let id = event.block.hash.toHex()

  let deposit = new Deposit(id)
  deposit.adminShare = event.params._adminShare
  deposit.amount = event.params._amount
  deposit.daoAddress = event.params._daoAddress
  deposit.depositTokenAddress = event.params._depositTokenAddress
  deposit.depositor = event.params._depositor
  deposit.timeStamp = event.params._timeStamp
  deposit.ownerFee = event.params._ownerFee
  deposit.save()
}
