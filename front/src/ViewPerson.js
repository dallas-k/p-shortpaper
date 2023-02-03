import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Actors from './actors.json';

// import UndefinedIdx from './component/UndefinedIdx';

// 배우 id 틀렸을 때 / 배우 id 맞을 때 / 로딩 중
// 뒤로 가기 버튼

function Loading(idx) {
    return (
        <div>
            <h2>Loading ...{idx}</h2>
        </div>
    )
}

function ErrPage(idx) {
    return (
        <div>
            <h2>Err .. {idx}</h2>
        </div>
    )
}

function ViewPerson() {
    const {idx} = useParams();
    const [current, setCurrent] = useState({});
    const [page, setPage] = useState(Loading)
    const chkActor = async () => {
        await Actors.forEach((actor, index) => {
            // console.log(actor)
            if(actor["idx"] === idx){
                setCurrent(actor);
            }
        });
        // setCurrent({"idx" : "error", "input" : idx})
    }

    const pageConfirm = () => {
        const code = current['idx'];
        if(code === undefined) {setPage(() => Loading(idx))}
        else if(code !== 'error') {setPage(() => ErrPage(idx))}
    }
    
    useEffect( () => {
        chkActor();
    },[]);
    useEffect ( () => {
        pageConfirm();
    }, [current])

    return (
        <main>
            <div className='person-img-container'>
                <h2>{idx}</h2>
            </div>
            <div className='person-desc-container'>
                <div><h3>이름</h3> <span>{current['idx']}</span></div>
                <div><h3>역할</h3> <span>영아</span></div>
                <div><h3>생년월일</h3> <span>1994-02-26</span></div>
                <div><h3>SNS</h3> <span>insta, facebook</span></div>
            </div>
            {page}
        </main>
    )
}

export default ViewPerson;