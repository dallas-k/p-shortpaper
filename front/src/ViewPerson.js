import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Actors from './actors.json';
import LoadingPage from './component/loading';
import './css/viewPerson.css';
import style from './css/style.module.css';

// 배우 id 틀렸을 때 / 배우 id 맞을 때 / 로딩 중
// 뒤로 가기 버튼

function ErrPage(idx) {
    return (
        <div className='personErr'>
            <h2>Error: 잘못된 접근입니다</h2>
            <p>입력하신 <span> "{idx}" </span>은/는 확인되지 않는 값입니다.</p>
            <Link className='btn' to='/actors'>배우목록 보기</Link>
        </div>
    )
}

function personIn(actor) {
    console.log(actor);
    return (
        <div className='person-container'>
            <div className='person-img-container'>
                <img src={`asset/actors/${actor.idx}.png`} alt={actor.real_name}></img>
            </div>
            <div className='person-desc-container'>
                <div className='person-desc-description'>
                    <h3>이름</h3> <span>{actor.real_name}</span>
                </div>
                <div className='person-desc-description'>
                    <h3>역할</h3> <span>{actor.char_name}</span>
                </div>
                <div className='person-desc-description'>
                    <h3>생년월일</h3> <span>{actor.birth}</span>
                </div>
                <div className='person-desc-description'>
                    <h3>SNS</h3>
                    {actor.sns.insta ? <span className='person-sns'><a id='person-sns-insta' href={actor.sns.insta} target='_blank' rel="noreferrer">Instagram</a></span> : null}
                    {actor.sns.youtube ? <span className='person-sns'><a id='person-sns-youtube' href={actor.sns.youtube} target='_blank' rel="noreferrer">Youtube</a></span> : null}
                    {actor.sns.blog ? <span className='person-sns'><a id='person-sns-blog' href={actor.sns.blog} target='_blank' rel="noreferrer">Blog</a></span> : null}
                    {actor.sns.fanclub ? <span className='person-sns'><a id='person-sns-pages' href={actor.sns.fanclub} target='_blank' rel="noreferrer">Other Pages</a></span> : null}
                </div>
            </div>
        </div>
    )
}

function ViewPerson() {
    const {idx} = useParams();
    const [current, setCurrent] = useState({});
    const [page, setPage] = useState(LoadingPage);

    function chkActor () {
        let data = {};
        Actors.forEach( (actor, index) => {
            if(actor["idx"] === idx){
                data = actor;
        }})
        if(Object.keys(data).length === 0) {
            data = {idx : 'error'}
        }
        return data;
    }

    const pageConfirm = () => {
        const code = current['idx'];
        if(code === undefined) {setPage(() => LoadingPage())}
        else if(code === 'error') {setPage(() => ErrPage(idx))}
        else if(code !== '') {setPage(() => personIn(current))}
    }
    
    useEffect( () => {
        let data = chkActor();
        setCurrent((prev) => prev = data);
    },[]);
    useEffect ( () => {
        pageConfirm();
    }, [current])

    return (
        <>
            <main className={style.minMain}>
                {page}
            </main>
        </>
    )
}

export default ViewPerson;