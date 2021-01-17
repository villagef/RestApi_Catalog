import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/BreakingBad.css';

export default function Cards({data}) {
    
    return (
        <>
        <section className="cards">
            {
                data.map(d => (
                    <div key={d.char_id} className="card">
                        <h1>{d.name}</h1>
                    </div>
                ))
            }   
        </section>  
        </>
    )
}
