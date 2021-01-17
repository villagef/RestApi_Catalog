import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles/BreakingBad.css';

import Cards from './components/Cards'


export default function BreakingBad() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://www.breakingbadapi.com/api/characters/")
            .then(res => {
                setData(res.data)
                
            })
            .catch(err => {
                console.log(err);
                
            })
    })

    return (
        <div>
            <Cards data={data}/>
        </div>
    )
}
