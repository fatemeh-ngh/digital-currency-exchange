import React,{useState, useEffect} from 'react';
import { getCoin } from '../services/Api';
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

    const [coins, setCoin] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoin(data);
        };
        fetchAPI() 
    },[])
    const searchHandler = (event) => {
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <input type="text" placeholder='Search' value={search} onChange={searchHandler}/>
            {
                coins.length ?
                <div>
                {
                    searchCoins.map(item => <Coin
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        symbol={item.symbol}
                        price={item.current_price}
                        marketCap={item.market_cap}
                        price_change={item.price_change_percentage_24h}
                        />)
                }
                </div>:
                <Loader/> 
            }
        </>
    );
};

export default Landing;