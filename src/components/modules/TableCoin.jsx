import { Bars } from "react-loader-spinner";
import TableRow from "./TableRow";
import styles from './TableCoin.module.css'
function TableCoin({coins, isLoading, currency, setChart}) {
  return (
    <div className={styles.container}>
        {isLoading ? <Bars color="#3874ff" width="1000"/>: (
            <table className={styles.table}>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => (
                    <TableRow coin={coin} key={coin.id} currency={currency} setChart={setChart}/>
                ))}
            </tbody>
        </table>
        )}
    </div>
  );
}

export default TableCoin