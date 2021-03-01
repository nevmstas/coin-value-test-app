import React from 'react'
import { useParams } from 'react-router'

export const CoinInfo = () => {
    const { id } = useParams<any>()
    
    return <div>{id}</div>
}
