export type WalletTokenInfoResponseType = {
  cursor: string | null
  page: number
  page_size: number
  result: TokenInfoType[]
}

export type TokenInfoType = {
  token_address: string
  symbol: string
  name: string
  logo: string | null
  thumbnail: string | null
  decimals: number
  balance: string
  possible_spam: boolean
  verified_contract: boolean
  balance_formatted: string
  usd_price: number | null
  usd_price_24hr_percent_change: number | null
  usd_price_24hr_usd_change: number | null
  usd_value: number | null
  usd_value_24hr_usd_change: number | null
  total_supply: string | null
  total_supply_formatted: string | null
  percentage_relative_to_total_supply: number | null
  native_token: boolean
  portfolio_percentage: number
}
