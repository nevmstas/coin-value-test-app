import { combineReducers } from 'redux'
import { coinReducer } from './Coins/reducer'

export const rootReducer = combineReducers({
    coins: coinReducer,
})

export type RootState = ReturnType<typeof rootReducer>
