import React from 'react'
import { Route } from 'react-router'
import { CoinInfo } from './pages/CoinInfo'
import { CoinsTable } from './pages/CoinsTable'

export const Routes = () => {
    return (
        <>
            <Route exact path='/'><CoinsTable /></Route>
            <Route path='/:id'><CoinInfo /></Route>
        </>
    )
}
