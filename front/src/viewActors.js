import './css/viewActors.css';
import Actors from './actors.json';
import {Link} from 'react-router-dom'

function ViewActors(){
    const actorList = [];

    for(let i = 0; i < Actors.length; i++){
        const actor = Actors[i]
        actorList.push(
            <Link key={actor.idx} to={`${actor.idx}`}>
                <div className='actor-sm-img' id={actor.idx} style={{backgroundImage : `url(${actor.image})`}}>
                    <div className='actor-desc'>
                        <h4>{actor.real_name}</h4>
                        <p>{actor.char_name} 역</p>
                    </div>
                </div>
            </Link>
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