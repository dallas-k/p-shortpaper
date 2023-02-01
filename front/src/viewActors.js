import { useState } from 'react';

function ViewActors(){
    const [width, setWidth] = useState(window.innerWidth);
    console.log(width);
    return (
        <main>
            <h2>View Actors</h2>
            <div className='actor-flex-box'>
                <div className='actor-bg_img'></div>
                <div className='actor-flex-box-container'></div>
                <div className='actor-flex-box-container'></div>
            </div>
            <div className='actor-flex-box'>
                <div className='actor-flex-box-container'></div>
                <div className='actor-flex-box-container'></div>
                <div className='actor-flex-box-container'></div>
            </div>
        </main>
    )
}

export default ViewActors;