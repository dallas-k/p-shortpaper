import './css/viewActors.css'
import Actors from './actors.json';

function ViewActors(){
    const actorList = [];
    const moveDesc = (e) => {
        document.querySelector(`#${e.target.id}+div`).style.cssText = `display: block`;
    }
    const outDesc = (e) => {
        document.querySelector(`#${e.target.id}+div`).style.cssText = `display: none`;
    }
    for(let i = 0; i < Actors.length; i++){
        const actor = Actors[i]
        actorList.push(
            <div key={i} className='actor-sm-img'>
                <img id={actor.idx} className="actor-sm-img-thumb" src={actor.image} alt={actor.real_name} onMouseOver={moveDesc} onMouseOut={outDesc}></img>
                <div className='actor-desc'>
                    <a>{actor.real_name}</a><br />
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