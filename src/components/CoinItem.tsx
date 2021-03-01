import { CoinType } from '../redux/redusers/Coins/reducer'
import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Container = styled.div`
    border: none;
    border-radius: 16px;
    height: 60px;
    &:hover {
        cursor: pointer;
    }
    // border: 1px solid #0d3b66;
    color: #0d3b66;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-around;
    background-color: #f4d35e;
    transition: .2s all;
    box-shadow: 0px 0px #0d3b66;
    &:hover{
        box-shadow: -10px 0px #0d3b66;
        transform: translateX(10px)
    }
`

const CoinName = styled.b`
    color: #f95738;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledChange24 = styled.div`
    color: ${(props: any) => (props.positive ? '#00b300' : '#f95738')};
`

interface CoinItemPropsType {
    coin: CoinType
}

export const CoinItem: React.FC<CoinItemPropsType> = ({ coin }) => {
    const { name, price, change24, marketCap } = coin
    return (
        <StyledLink to={`/${coin.id}`}>
            <Container>
                <div>
                    <CoinName>{name}</CoinName>
                </div>
                <div>{price}</div>
                {/* @ts-ignore */}
                <StyledChange24 positive={change24>=0}>
                    {change24}%
                </StyledChange24>
                <div>{marketCap}</div>
            </Container>
        </StyledLink>
    )
}
