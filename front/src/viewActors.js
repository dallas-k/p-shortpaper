import './css/viewActors.css';
import Actors from './actors.json';
// import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Footer from './component/footer';

function ViewActors(){
    const actorList = [];

    for(let i = 0; i < Actors.length; i++){
        const actor = Actors[i]
        actorList.push(
            <Link key={actor.idx} to={`${actor.idx}`}>
                <div className='actor-sm-img' id={actor.idx} style={{backgroundImage : `url('/img/${actor.idx}.png')`}}>
                {/* <div className='actor-sm-img' id={actor.idx} style={{backgroundImage : `url(${actor.image})`}}> */}
                    <div className='actor-desc'>
                        <h4>{actor.real_name}</h4>
                        <p>{actor.char_name} 역</p>
                    </div>
                </div>
            </Link>
        )
    }
    return (
        <>
            <main>
                <div className='actor-wrap'>
                    {actorList}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ViewActors;