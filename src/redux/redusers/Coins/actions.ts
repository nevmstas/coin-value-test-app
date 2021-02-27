import { CoinType } from './reducer'
import {
    CoinsActionsType,
    GET_COINS,
    GET_COINS_FAILED,
    GET_COINS_SUCCEEDED,
    SET_LOADING,
} from './type'

export const getCoins = () => ({ type: GET_COINS })
export const getCoinsSucceeded = (coins: CoinType[]): CoinsActionsType => ({
    type: GET_COINS_SUCCEEDED,
    payload: coins,
})

export const getCoinsFailed = (error: string): CoinsActionsType => ({
    type: GET_COINS_FAILED,
    payload: error,
})

export const setLoading = (isLoading: boolean): CoinsActionsType => ({
    type: SET_LOADING,
    payload: isLoading,
})
