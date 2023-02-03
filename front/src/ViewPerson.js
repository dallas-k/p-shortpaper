// import Actors from './actors.json';
import React from 'react';
import { useParams } from "react-router-dom";

function ViewPerson() {
    const { username } = useParams();

    return (
        <main>
            <h1>ViewPerson</h1>
            <p>{username}</p>
        </main>
    )
}

export default ViewPerson()