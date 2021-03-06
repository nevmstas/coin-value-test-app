export const SET_LOADING = 'COINS/SET_LOADING'
export const GET_COINS = 'COINS/GET_COINS'
export const GET_COINS_SUCCEEDED = 'COINS/GET_COINS_SUCCEEDED'
export const GET_COINS_FAILED = 'COINS/GET_COINS_FAILED'

export const SET_CURRENT_COIN = 'COINS/SET_CURRENT_COIN'

interface SetLoadingType {
    type: typeof SET_LOADING
    payload: boolean
}

interface SetCurrentCoin {
    type: typeof SET_CURRENT_COIN
    payload: number
}

interface GetCoinsSucceededType {
    type: typeof GET_COINS_SUCCEEDED
    payload: any[]
}

interface GetCoinsFailedType {
    type: typeof GET_COINS_FAILED
    payload: string
}

export type CoinsActionsType =
    | SetLoadingType
    | GetCoinsSucceededType
    | GetCoinsFailedType
    | SetCurrentCoin
