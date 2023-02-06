import style from './css/style.module.css';
import Carousel from './component/carousel';

function ViewHome(){
    return (
        <main className={window.innerWidth < 1140 ? style.minMain : null} style={{'position' : 'relative'}}>
            <Carousel />
        </main>
    )
}

export default ViewHome