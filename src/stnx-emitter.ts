import {
  CreateDaoErc20 as CreateDaoErc20Event,
  CreateDaoErc721 as CreateDaoErc721Event,
  NewUser as NewUserEvent,
  UpdateDistributionAmount as UpdateDistributionAmountEvent,
  UpdatePricePerToken as UpdatePricePerTokenEvent,
} from "../generated/StnxEmitter/StnxEmitter"
import { createErc20Dao, createErc721Dao } from "./createDao"
import { updateDistributionAmount, updatePricePerToken } from "./updateRaise"
import { createNewUser } from "./user"

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
