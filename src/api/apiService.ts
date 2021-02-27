import superagent from 'superagent'
import { CoinType } from '../redux/redusers/Coins/reducer'
import { mapCoinObj } from '../utils/mapCoinObj'

//put to the .env
const DEV_ENDPOINT = 'https://min-api.cryptocompare.com'

export class ApiService {
    async getCoins() {
        try {
            const data = await superagent
                .get(`${DEV_ENDPOINT}/data/top/totalvolfull`)
                .set('accept', 'json')
                .query({
                    limit: '100',
                    tsym: 'USD',
                })

            const mappedCoins: CoinType[] = []
            data.body.Data.forEach((coin: any) => {
                mappedCoins.push(mapCoinObj(coin))
            })
            return mappedCoins
        } catch (error) {
            console.error(error)
        }
    }
}
