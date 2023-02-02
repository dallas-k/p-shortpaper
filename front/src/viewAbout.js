import { useState, useEffect } from 'react';

function ViewAbout() {
    const URL = "https://web-app-18fe6-default-rtdb.asia-southeast1.firebasedatabase.app/";
    const [data, setData] = useState(null);
    useEffect( () => {
        fetch(`${URL}/words.json`)
        .then(res => res.json())
        .then(data => setData(data));
    }, [])

    console.log(data);
    
    return (
        <div>
            <h2>Abpit</h2>
        </div>
    )
}

export default ViewAbout