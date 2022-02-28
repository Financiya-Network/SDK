import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xfA8e11D87F9B219e780Ff2Efa4304c8Ef5bFa0E7'

export const INIT_CODE_HASH = '0x8b59d0fbd3a2da5e26f61e1d4b91f355d2c382ec32c993635b0d80dce6e1ef1c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum ChainId {
  MUMBAI = 80001,
  MATIC = 137,
  ETHEREUM = 1,
  RINKEBY = 4
}

export const currentTestChain = ChainId.RINKEBY // set current test chain id

// exports for external consumption

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export type BigintIsh = JSBI | bigint | string

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}