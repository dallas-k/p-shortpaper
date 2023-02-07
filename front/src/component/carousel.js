import {useState, useEffect} from 'react';
import Slider from 'react-touch-drag-slider';
import './css/carousel.css'
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import Datas from './carousel.json';

function Carousel(props){
    const images = [img1, img2, img3];

    return (
        <div className='carousel'>
            <div className='carousel-container' style={{'height' : props.height}}>
                <Slider
                activeIndex={0}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true}
                >
                {images.map((image, idx) => (
                    <div className='content-container'>
                        <img key={idx} alt={idx} className='carousel-img' />
                        {/* <img src={image} key={idx} alt={idx} className='carousel-img' /> */}
                        <vide src='./img/redface.mp4' autoplay loop width={props.width} height={props.height}></vide>
                    </div>
                    // <img src={image} key={idx} alt={idx} className='carousel-img' onMouseEnter={props.onHover} onMouseLeave={props.onOut} />
                ))}
                </Slider>
            </div>
        </div>
    )
}

{/* <div className='video-container'>
                    {/* <iframe width={width*0.8} height={height} src="https://www.youtube.com/embed/VX8gjVRi7os" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                //     <video width={width*0.8} height={height*0.8} src="./img/redface.mp4" autoplay loop></video>
                // </div> */}

export default Carousel