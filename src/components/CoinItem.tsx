import { CoinType } from '../redux/redusers/Coins/reducer'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
    border: none;
    border-radius: 16px;
    box-shadow: 1px 1px 1px black;
    height: 100px;
    &:hover {
        cursor: pointer;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

interface CoinItemPropsType {
    coin: CoinType
}

export const CoinItem: React.FC<CoinItemPropsType> = ({ coin }) => {
    const { name, price, change24, marketCap } = coin
    return (
        <StyledLink to={`/${coin.name}`}>
            <Container>
                <b>{name}</b> {price} {change24} {marketCap}
            </Container>
        </StyledLink>
    )
}
