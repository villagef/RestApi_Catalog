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
                        <div className="imgWrapper">
                        <img src={d.img} alt="" srcset=""/>
                        </div>
                        <div className="info">
                            <p>{d.name}</p>
                        </div>
                        
                    </div>
                ))
            }   
        </section>  
        </>
    )
}
