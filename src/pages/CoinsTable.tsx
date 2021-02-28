import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CoinItem } from '../components/CoinItem'
import { getCoins } from '../redux/redusers/Coins/actions'
import { RootState } from '../redux/redusers/rootReducer'
import { ContentWrapper } from '../Styles/layout'

export const CoinsTable = () => {
    const dispatch = useDispatch()
    const { coins, isLoading } = useSelector(
        (state: RootState) => state.coins,
        shallowEqual
    )

    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch])

    return (
        <ContentWrapper>
            {!isLoading && coins ? (
                coins.map((coin) => <CoinItem coin={coin} />)
            ) : (
                <p>Loading...</p>
            )}
        </ContentWrapper>
    )
}
