import React,{useState, useEffect} from 'react';
import { getCoin } from '../services/Api';
import Loader from './Loader';

const Landing = () => {

    const [coins, setCoin] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoin(data);
        };
        fetchAPI() 
    },[])
    return (
        <>
            {
                coins.length ?
                <div>
                {
                    coins.map(item => <p key={item.id}>{item.name}</p>)
                }
                </div>:
                <Loader/> 
            }
            <input type="text" placeholder='Search' />

        </>
    );
};

export default Landing;