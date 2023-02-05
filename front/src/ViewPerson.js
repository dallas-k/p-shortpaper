import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actors from './actors.json';
import LoadingPage from './component/loading';
import './css/personErr.css'

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

function personIn(idx) {
    return (
        <div>
            <div className='person-img-container'>
                <h2>{idx}</h2>
            </div>
            <div className='person-desc-container'>
                <div><h3>이름</h3> <span>{idx}</span></div>
                <div><h3>역할</h3> <span>영아</span></div>
                <div><h3>생년월일</h3> <span>1994-02-26</span></div>
                <div><h3>SNS</h3> <span>insta, facebook</span></div>
            </div>
        </div>
    )
}

function ViewPerson() {
    const {idx} = useParams();
    const [current, setCurrent] = useState({});
    const [page, setPage] = useState(LoadingPage);

    const chkActor = async () => {
        await Actors.forEach((actor, index) => {
            if(actor["idx"] === idx){
                setCurrent(actor);
            }
        });  
        if(Object.keys(current).length === 0) {setCurrent({idx : 'error', code : idx})}
        console.log(current);
    }

    const pageConfirm = () => {
        const code = current['idx'];
        console.log(code);
        if(code === undefined) {setPage(() => LoadingPage())}
        else if(code === 'error') {setPage(() => ErrPage(idx))}
        else {setPage(() => {personIn(code)})}
    }
    
    useEffect( () => {
        chkActor();
    },[]);
    useEffect ( () => {
        pageConfirm();
    }, [current])

    return (
        <main>
            {page}
        </main>
    )
}

export default ViewPerson;