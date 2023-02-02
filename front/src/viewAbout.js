import { useState, useEffect } from 'react';

function ViewAbout() {
    const URL = "https://web-app-18fe6-default-rtdb.asia-southeast1.firebasedatabase.app/";
    // const abc = {"-NNB3K74kY4Eti73LwKT":{"babyName":"테스트","birth":"2022.12.21","email":"test@naver.com","pwd":"thwjd123"},"-NNB45CJ7u1taAjKMx80":{"babyName":"test2","birth":"2023-02-08","email":"test2@naver.com","pwd":"d12th8wjd!!"},"-NNBtIyw4fFLYJ0g3AKr":{"babyName":"test3","birth":"2023-02-24","email":"test3@naver.com","pwd":"fffffgdg"},"-NNBuVm7FBpLXqp1pLmU":{"babyName":"test5","birth":"2023-02-25","email":"test5@naver.com","pwd":"1111111"}}
    const [data, setData] = useState(null);
    useEffect( () => {
        fetch(`${URL}/actors.json`)
        .then(res => res.json())
        .then(data => setData(data));
    }, [])

    console.log(data);
    // const jsonabc = JSON.parse(abc);
    // console.log(data.length); 

    // const list = [];

    // for(let i = 0; i < data[0].length; i++){
    //     list.push(
    //         <li>{data[0][i].name}</li>
    //     )
    // }

    return (
        <div>
            <h2>Abpit</h2>
        </div>
    )
}

export default ViewAbout