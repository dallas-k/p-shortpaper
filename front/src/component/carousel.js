import style from '../css/carousel.module.css';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

function Carousel(){
    const window = {width:"640px", height:"360px", overflow:'hidden'}

    return (
        <div style={window}>
            <div style={{display: "flex"}}>
                <img className={style.img} alt="thumbnail_1" src={img1}></img>
                <img className={style.img} alt="thumbnail_2" src={img2}></img>
                <img className={style.img} alt="thumbnail_3" src={img3}></img>
            </div>
        </div>
    )
}

export default Carousel