import {useState} from 'react';
import './css/viewActors.css';
import Actors from './actors.json';

function ViewActors(){
    const actorList = [];
    const [current, setCurrent] = useState(null);
    const moveDescImg = (e) => {
        setCurrent(prev => prev = e.target.id);
        console.log(current);
        // console.log(e.target.id);
        // console.log(typeof e.target.id);
        // setCurrent(prev => prev = prev + 1)
        // console.log(current);
        // document.querySelector(`#${current}>div`).style.cssText = `display:block; height:0px;`
    }

    const outDescImg = (e) => {
        // document.querySelector(`#${current}>div`).style.cssText = `display:none; height:-60px;`
    }
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