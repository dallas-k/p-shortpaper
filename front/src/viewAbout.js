import { useState, useEffect } from 'react';

function ViewAbout() {
    const URL = "https://web-app-18fe6-default-rtdb.asia-southeast1.firebasedatabase.app/";
    const [data, setData] = useState(null);
    function getData() {
        const response = fetch(`${URL}/actors.json`);
        return response.then(data => data.json());
    }
    async function exec() {
        let actors;
        try {
            actors = await getData();
            setData(actors);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
        exec();
    }, []);

    const abc = {};
    const obj = Object.assign(abc, data);

    console.log(obj);

    return (
        <div>
            <h2>Abpit</h2>
            <p></p>
        </div>
    )
}

export default ViewAbout