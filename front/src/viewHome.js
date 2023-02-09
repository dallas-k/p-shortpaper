import './css/homeView.css';
import Datas from './data.json';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function ViewHome(){
    const [pause, setPause] = useState(true);
    const [dataList, setDataList] = useState([]);
    const [num, setNum] = useState(1);

    const dataGet = async () => {
        const datas = [];
        Datas.map((data, idx) => { datas.push(
            <div className="home-content-container" key={idx} id={"home-container"+(idx+1)}>
                <img src={"asset/home/"+data.image} alt="유튜브 썸네일"
                onMouseEnter={() => {onHover(idx+1)}}
                ></img>
                <video src={"asset/home/"+data.video} loop onMouseEnter={() => {onHover(idx+1)}} onClick={() => playNpause(idx+1)}></video>
            </div>)
        })
        setDataList(datas);
    }

    const onHover = (idx) => {
        document.querySelector(`#home-container${idx} img`).style.display = 'none';
        document.querySelector(`#home-container${idx} video`).play();
        document.querySelector(`#home-container${idx} video`).muted = true;
        document.querySelector(`#home-container${idx} video`).style.display = 'block';
        setPause(false);
        // console.log(pause);
    }
    const onMenu = () => {
        document.querySelector(`#home-container${num} video`).pause();
        setPause(true);
    }
    const playNpause = async (num) => {
        setPause((pause) => !pause);
        if(!pause) {
            console.log('pause -> play');
            document.querySelector(`#home-container${num} video`).play()
        }
        else {
            console.log('play -> pause')
            document.querySelector(`#home-container${num} video`).pause()
        }
    }

    const changeContent = async (idx) => {
        for(let i = 1; i < 4; i++){
            document.querySelector(`#home-container${i}`).style.display = 'none';
            document.querySelector(`#home-container${i} img`).style.display = 'block';
            document.querySelector(`#home-container${i} video`).style.display = 'none';
            document.querySelector(`#home-container${i} video`).currentTime = 0;
            document.querySelector(`#home-container${i}`).classList.remove('home-radio-active');
        }
        document.querySelector(`#home-container${idx}`).style.display = 'block';
        document.querySelector(`#home-container${idx}`).classList.add('home-radio-active');
        setNum(idx);
    }
    useEffect( () => {
        dataGet();
    }, [])

    return (
        <div className='home-wrap'>
            <div className='home-header' onMouseEnter={onMenu}>
                <h1><NavLink to='/'>짧은대본</NavLink></h1>
                <div>
                    <div className='home-header-sns'>
                        <a id='header-sns-yt' href='https://www.youtube.com/@short_paper' rel='noreferrer' target='_blank'>유튜브</a>
                        <a id='header-sns-in' href='https://www.instagram.com/short_paper/' rel='noreferrer' target='_blank'>인스타그램</a>
                        <a id='header-sns-fb' href='https://www.facebook.com/shortPaper' rel='noreferrer' target='_blank'>페이스북</a>
                    </div>
                    <nav className='home-header-nav'>
                        <NavLink to='/about'>짧은대본</NavLink>
                        <NavLink to='/world'>세계관</NavLink>
                        <NavLink to='/actors'>배우</NavLink>
                        <NavLink to='/contents'>회차정보</NavLink>
                        <NavLink to='/shop'>굿즈</NavLink>
                    </nav>
                </div>
            </div>
            <div className='home-main' onMouseOut={onMenu}>
                {dataList}
                <div className='home-radio-container'>
                    <div className='home-radio-btn' onClick={() => {changeContent(1)}}></div>
                    <div className='home-radio-btn' onClick={() => {changeContent(2)}}></div>
                    <div className='home-radio-btn' onClick={() => {changeContent(3)}}></div>
                </div>
            </div>
            <div className='home-footer' onMouseEnter={onMenu}>
                <div className='home-footer-desc'>
                    <p>본 사이트는 짧은대본의 팬페이지로서, 영리적 수익을 추구하지 않습니다</p>
                    <p>Copyright(C) 2023 Youtube Channel [Short_Paper] All Rights Reserved</p>
                    <p>Made by: <span>Dallas</span> | dallas.wty@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ViewHome