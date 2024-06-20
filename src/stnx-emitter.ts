import {
  CreateDaoErc20 as CreateDaoErc20Event,
  CreateDaoErc721 as CreateDaoErc721Event,
  NewUser as NewUserEvent,
  UpdatePricePerToken as UpdatePricePerTokenEvent,
  UpdateDistributionAmount as UpdateDistributionAmountEvent,
  Deposited as DepositedEvent,
  UpdateMinMaxDeposit as UpdateMinMaxDepositEvent,
  ChangedSigners as ChangedSignersEvent,
} from "../generated/StnxEmitter/StnxEmitter"
import { createErc20Dao, createErc721Dao } from "./createDao"
import { createNewUser, handleSignerChange } from "./user"
import { updatePricePerToken, updateDistributionAmount } from "./updateRaise"
import { newDeposit } from "./deposit"
import { updateMinMax } from "./updateMinMaxAmt"

export function handleCreateDaoErc20(event: CreateDaoErc20Event): void {
  createErc20Dao(event)
}

export function handleCreateDaoErc721(event: CreateDaoErc721Event): void {
  createErc721Dao(event)
}

export function handleNewUser(event: NewUserEvent): void {
  createNewUser(event)
}

export function handlePricePerToken(event: UpdatePricePerTokenEvent): void {
  updatePricePerToken(event)
}

export function handleDisributionAmount(
  event: UpdateDistributionAmountEvent
): void {
  updateDistributionAmount(event)
}

export function handleDeposit(event: DepositedEvent): void {
  newDeposit(event)
}

export function handleMinMaxDepositAmt(event: UpdateMinMaxDepositEvent): void {
  updateMinMax(event)
}

export function handleSigner(event: ChangedSignersEvent): void {
  handleSignerChange(event)
}
