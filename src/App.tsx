import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCoins } from './redux/redusers/Coins/actions'
import { RootState } from './redux/redusers/rootReducer'
import { Routes } from './Routes'
import styled from 'styled-components'

// Palette
// blue - #0d3b66
// white - #faf0ca
// yellow - #f4d35e
// orange - #ee964b
// red- #f95738

const Background = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    background: #faf0ca;
`

const StyledTittle = styled.div`
    z-index: 10;
    color: #f95738;
    font-size: 50px;
    top: 0;
    background: #faf0ca;
    position: sticky;
`

const App: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoins())
    }, [dispatch])

    return (
        <Background>
            <StyledTittle>Coin value</StyledTittle>
            <Routes />
        </Background>
    )
}

export default App
