import {
  CreateDaoErc20 as CreateDaoErc20Event,
  CreateDaoErc721 as CreateDaoErc721Event,
  NewUser as NewUserEvent,
  UpdatePricePerToken as UpdatePricePerTokenEvent,
  UpdateDistributionAmount as UpdateDistributionAmountEvent,
  Deposited as DepositedEvent,
  UpdateMinMaxDeposit as UpdateMinMaxDepositEvent,
  ChangedSigners as ChangedSignersEvent,
  RefundERC20DAO as RefundERC20DAOEvent,
  RefundERC721DAO as RefundERC721DAOEvent,
  StartDeposit as StartDepositEvent,
} from "../generated/StnxEmitter/StnxEmitter";
import { createErc20Dao, createErc721Dao } from "./createDao";
import { createNewUser } from "./user";
import { updatePricePerToken, updateDistributionAmount } from "./updateRaise";
import { newDeposit, startDeposit } from "./deposit";
import { updateMinMax } from "./updateMinMaxAmt";
// import { refundErc20, refundErc721 } from "./refund";
import { changeSigners } from "./changeSigners";

export function handleCreateDaoErc20(event: CreateDaoErc20Event): void {
  createErc20Dao(event);
}

export function handleCreateDaoErc721(event: CreateDaoErc721Event): void {
  createErc721Dao(event);
}

export function handleNewUser(event: NewUserEvent): void {
  createNewUser(event);
}

export function handlePricePerToken(event: UpdatePricePerTokenEvent): void {
  updatePricePerToken(event);
}

export function handleDisributionAmount(
  event: UpdateDistributionAmountEvent
): void {
  updateDistributionAmount(event);
}

export function handleDeposit(event: DepositedEvent): void {
  newDeposit(event);
}

export function handleMinMaxDepositAmt(event: UpdateMinMaxDepositEvent): void {
  updateMinMax(event);
}

// export function handleRefundERC20DAO(event: RefundERC20DAOEvent): void {
//   refundErc20(event)
// }

// export function handleRefundERC721DAO(event: RefundERC721DAOEvent): void {
//   refundErc721(event)
// }

export function handleStartDeposit(event: StartDepositEvent): void {
  startDeposit(event);
}

export function handleChangedSigners(event: ChangedSignersEvent): void {
  changeSigners(event);
}
