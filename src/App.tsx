import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from './redux/redusers/Coins/actions'
import { RootState } from './redux/redusers/rootReducer'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const { coins } = useSelector((state: RootState) => state.coins)

    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch])

    return (
        <div>
            {coins.map((coin) => (
                <div key={coin.id}>{coin.name}</div>
            ))}
        </div>
    )
}

export default App
