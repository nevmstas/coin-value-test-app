import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCoins } from './redux/redusers/Coins/actions'
import { RootState } from './redux/redusers/rootReducer'
import { Routes } from './Routes'

const App: React.FC = () => {
    return (
        <div>
           <Routes />
        </div>
    )
}

export default App
