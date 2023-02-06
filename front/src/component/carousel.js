import {useState, useEffect} from 'react';
import Slider from 'react-touch-drag-slider';
import './css/carousel.css'
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

function Carousel(){
    const images = [img1, img2, img3];
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth * 0.8 * 0.5625);
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
        setHeight(window.innerWidth*0.8*0.5625)
    })
    // const conWidth = () => {
    //     const width = document.querySelector('.carousel-container').offsetWidth;
    //     setWidth(width);
    // }    
    // const widthChange = () => {
    //     setHeight(width / 16 * 9);
    // }
    // // useEffect(() => {
    // //     conWidth();
    // // },[conWidth])
    // // window.addEventListener('resize', conWidth);
    // useEffect(() => {
    //     widthChange();
    //     console.log(height);
    // },[width])
    return (
        <div className='carousel'>
            <div className='carousel-container' style={{'height' : height}}>
                <Slider
                // onSlideComplete={(i) => {
                //     console.log('finished dragging, current slide is', i)
                // }}
                // onSlideStart={(i) => {
                //     console.log('started dragging on slide', i)
                // }}
                activeIndex={0}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true}
                >
                {images.map((image, idx) => (
                    <img src={image} key={idx} alt={idx} className='carousel-img' />
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel