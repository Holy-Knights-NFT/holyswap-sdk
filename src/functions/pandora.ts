import { BigNumber } from '@ethersproject/bignumber'
import { Zero } from '@ethersproject/constants'

export function toAmount(token, shares: BigNumber): BigNumber {
  return BigNumber.from(token.pandoraShare).gt(0) ? shares.mul(token.pandoraAmount).div(token.pandoraShare) : Zero
}

export function toShare(token, amount: BigNumber): BigNumber {
  return BigNumber.from(token.pandoraAmount).gt(0) ? amount.mul(token.pandoraShare).div(token.pandoraAmount) : Zero
}
