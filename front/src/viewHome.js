import style from './css/style.module.css';
import './css/viewHome.css';
import Carousel from './component/carousel';

function ViewHome(){
    return (
        <main className={window.innerWidth < 1140 ? style.minMain : null} style={{'position' : 'relative'}}>
            <Carousel />
            <div className='video-container'>
              <iframe width="100" height="100" src="https://www.youtube.com/embed/VX8gjVRi7os" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </main>
    )
}

export default ViewHome