import { CoinType } from '../redux/redusers/Coins/reducer'

export const mapCoinObj = (data: any): CoinType => {
    return {
        id: data.CoinInfo.Id,
        fullName: data.CoinInfo.FullName,
        name: data.CoinInfo.Name,
        price: data.DISPLAY.USD.PRICE,
        marketCap: data.DISPLAY.USD.MKTCAP,
        change24: data.DISPLAY.USD.CHANGEPCT24HOUR,
    }
}
