import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { CoinItem } from '../components/CoinItem'
import { RootState } from '../redux/redusers/rootReducer'
import { ContentWrapper } from '../Styles/layout'
import styled from 'styled-components'

const TableHeaderRoot = styled.div`
    display: flex;
    justify-content: space-around;
    font-weight: 700px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const PaginationContainer = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    border: 1px solid red;
`
const PaginationItem = styled.li`
    border: 1px solid black;
    cursor: pointer;
    color: #0d3b66;
`

const TableHeader = () => {
    return (
        <TableHeaderRoot>
            <div>Name</div>
            <div>Price</div>
            <div>change24</div>
            <div>marketCap</div>
        </TableHeaderRoot>
    )
}

export const CoinsTable = () => {
    const { coins, isLoading } = useSelector(
        (state: RootState) => state.coins,
        shallowEqual
    )

    const [currentPage, setPage] = useState(1)
    const [coinsPerPage] = useState(20)

    const indexOfLastTodo = currentPage * coinsPerPage
    const indexOfFirstTodo = indexOfLastTodo - coinsPerPage
    const currentCoins = coins.slice(indexOfFirstTodo, indexOfLastTodo)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(coins.length / coinsPerPage); i++) {
        pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map((number) => {
        return (
            <PaginationItem
                key={number}
                id={number.toString()}
                onClick={(e: any) => setPage(e.target.id)}
            >
                {number}
            </PaginationItem>
        )
    })

    return (
        <ContentWrapper>
            <TableHeader />
            {!isLoading && coins ? (
                <>
                    {currentCoins.map((coin) => (
                        <CoinItem coin={coin} />
                    ))}
                    <PaginationContainer>
                        {renderPageNumbers}
                    </PaginationContainer>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </ContentWrapper>
    )
}
