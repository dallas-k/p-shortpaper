import {useState, useEffect} from 'react';
import './css/viewActors.css';
import Actors from './actors.json';

function ViewActors(){
    const actorList = [];
    const [current, setCurrent] = useState('');
    const moveDescImg = (e) => {
        setCurrent(e.target.id);
        // document.querySelector(`#${current}>div`).style.cssText = `display:block; height:0px;`
    }
    const outDescImg = () => {
        setCurrent(null);
        // document.querySelector(`#${current}>div`).style.cssText = `display:none; height:-60px;`
    }

    useEffect(() => {
        if(current !== null){
            document.querySelector(`#${current}>div`).style.cssText = `display:block; height:0px;`
        } else {
            document.querySelector(`#${current}>div`).style.cssText = `display:none; height:-60px;`
        }
    })

    for(let i = 0; i < Actors.length; i++){
        const actor = Actors[i]
        actorList.push(
            <div key={i} className='actor-sm-img' id={actor.idx} onMouseOver={moveDescImg} onMouseOut={outDescImg} style={{backgroundImage : `url(${actor.image})`}}>
                <div className='actor-desc'>
                    <b>{actor.real_name}</b><br />
                    <span>{actor.char_name} 역</span>
                </div>
            </div>
        )
    }

    return (
        <main>
            <div className='actor-wrap'>
                {actorList}
            </div>
            {/* <div className='actor-wrap'>
                <div id='box1' className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div className='actor-sm-img'></div>
                <div id='box40' className='actor-sm-img'></div>
            </div> */}
        </main>
    )
}

export default ViewActors;