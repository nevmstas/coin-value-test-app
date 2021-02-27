import { all, call, takeLatest, put } from 'redux-saga/effects'
import { ApiService } from '../api/apiService'
import {
    getCoinsFailed,
    getCoinsSucceeded,
    setLoading,
} from './redusers/Coins/actions'
import { CoinType } from './redusers/Coins/reducer'
import { CoinsActionsType, GET_COINS } from './redusers/Coins/type'

const api = new ApiService()

export function* fetchCoinsWatcher() {
    yield takeLatest(GET_COINS, fetchTerminal)
}

function* fetchTerminal(_: CoinsActionsType) {
    try {
        yield put(setLoading(true))
        //@ts-ignore
        const res: CoinType[] = yield call(api.getCoins)
        yield put(getCoinsSucceeded(res))
        yield put(setLoading(false))
    } catch (e) {
        yield put(getCoinsFailed(`fetching coins error ${e.message}`))
        yield put(setLoading(false))
    }
}

export default function* rootSaga() {
    yield all([fetchCoinsWatcher()])
}
