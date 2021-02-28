import React from 'react'
import { useParams } from 'react-router'

export const CoinInfo = () => {
    const {name} = useParams<any>()
    return (
        <div>
            {name}
        </div>
    )
}