import style from './css/style.module.css';
import Carousel from './component/carousel';

function ViewHome(){
    return (
        <main className={style.minMain} style={{'position' : 'relative'}}>
            <Carousel />
        </main>
    )
}

export default ViewHome