import Slider from 'react-touch-drag-slider';
import style from '../css/carousel.module.css';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

function Carousel(){
    const window = {width:"100%", height:"360px", overflow:'hidden'}
    const images = [img1, img2, img3];
    const onMouseover = (e) => {console.log(e.target.alt);}

    return (
        <div className='carousel' style={window}>
            <Slider
            onSlideComplete={(i) => {
                console.log('finished dragging, current slide is', i)
            }}
            onSlideStart={(i) => {
                console.log('started dragging on slide', i)
            }}
            activeIndex={0}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}
            >
            {images.map((image, idx) => (
                <img src={image} key={idx} alt={idx} className={style.img} onMouseOver={onMouseover} />
            ))}
            </Slider>
        </div>
    )
}

export default Carousel