import {
    GET_COINS_FAILED,
    GET_COINS_SUCCEEDED,
    SET_LOADING,
} from './type'


export interface CoinType {
    id: number,
    fullName: string,
    name: string,
    price: string,
    marketCap: string,
    change24: string 
}


interface InitialStateType {
    coins: CoinType[]
    isLoading: Boolean
    error: string
}

const initialState: InitialStateType = {
    coins: [],
    isLoading: false,
    error: '',
}

export const coinReducer = (
    state = initialState,
    action: any
): InitialStateType => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case GET_COINS_SUCCEEDED:
            return {
                ...state,
                coins: action.payload,
            }
        case GET_COINS_FAILED:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state
    }
}
