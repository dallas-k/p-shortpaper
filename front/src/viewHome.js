import style from './css/style.module.css';
import './css/viewHome.css';
import Carousel from './component/carousel';
import { useState, useEffect } from 'react';

function ViewHome(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth * 0.8 * 0.5625);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
        setHeight(window.innerWidth*0.8*0.5625)
    })
    const onHover = () => {
        document.querySelector('.video-container iframe').style.display = 'none';
    }
    const onOut = () => {
        document.querySelector('.video-container iframe').style.display = 'block';
    }

    return (
        <div className={window.innerWidth < 1140 ? style.minMain : null} style={{'position' : 'relative'}}>
            <div className='home-container'>
                <Carousel width={width*0.8} height={height} onHover={onHover} onOut={onOut} />
            </div>
        </div>
    )
}

export default ViewHome