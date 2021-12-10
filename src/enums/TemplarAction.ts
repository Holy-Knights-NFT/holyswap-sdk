export enum TemplarAction {
  ADD_ASSET = 1,
  REPAY = 2,
  REMOVE_ASSET = 3,
  REMOVE_COLLATERAL = 4,
  BORROW = 5,
  GET_REPAY_SHARE = 6,
  GET_REPAY_PART = 7,
  ACCRUE = 8,

  // Functions that don't need accrue to be called
  ADD_COLLATERAL = 10,
  UPDATE_EXCHANGE_RATE = 11,

  // Function on Pandora
  PANDORA_DEPOSIT = 20,
  PANDORA_WITHDRAW = 21,
  PANDORA_TRANSFER = 22,
  PANDORA_TRANSFER_MULTIPLE = 23,
  PANDORA_SETAPPROVAL = 24,

  // Any external call (except to Pandora)
  CALL = 30
}
