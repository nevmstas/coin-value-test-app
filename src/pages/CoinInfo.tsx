import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../redux/redusers/rootReducer'
import styled from 'styled-components'
import { ContentWrapper } from '../Styles/layout'
import { setCurrentCoin } from '../redux/redusers/Coins/actions'

const Container = styled.div`
    // border: 1px solid black;
    border-radius: 16px;
    padding: 20px;
    height: 500px;
    background-color: #f4d35e;
`

const TitleText = styled.div`
    font-size: 50px;
    text-align: center;
    color: #f95738;
`

const UnderTitleText = styled.div`
    font-size: 20px;
    text-align: center;
    color: #fa785f;
`

export const CoinInfo = () => {
    const { id } = useParams<any>()
    const dispatch = useDispatch()
    const { coins, currentCoin } = useSelector(
        (state: RootState) => state.coins
    )

    useEffect(() => {
        dispatch(setCurrentCoin(id))
    }, [coins])

    return (
        <ContentWrapper>
            <Container>
                <TitleText>{currentCoin?.fullName}</TitleText>
                <UnderTitleText>{currentCoin?.name}</UnderTitleText>
                total: {currentCoin?.marketCap} <br />
                price: {currentCoin?.price}
                <br />
                change24: {currentCoin?.change24}
            </Container>
        </ContentWrapper>
    )
}
