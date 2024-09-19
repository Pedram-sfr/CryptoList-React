import chartUp from "../../assets/line-up.svg"
import chartDown from "../../assets/line-down.svg"
import styles from './TableCoin.module.css'
import { marketChart } from "../../services/cryptoApi"

function TableRow({setChart, currency, coin}) {
    const {id, name, symbol, image, current_price, total_volume, price_change_percentage_24h: price_chane} = coin
    const showHandler = async () => {
        try {
            const res = await fetch(marketChart(id,currency))
            const json = await res.json();
            setChart({... json,coin,currency})
        } catch (error) {
            console.log(error.message)
            setChart(null)
        }
    }
  return (
    <tr>
        <td>
            <div className={styles.symbol} onClick={showHandler}>
                <img src={image} alt={name} />
                <span>{symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{name}</td>
        <td>{currency == "eur" ? "€" : "$"}{current_price.toLocaleString()}</td>
        <td className={price_chane > 0 ? styles.success : styles.error}>{price_chane.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={price_chane > 0 ? chartUp : chartDown} alt={name} /></td>
    </tr>
  )
}

export default TableRow