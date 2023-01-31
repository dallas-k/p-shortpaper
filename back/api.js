const express = require('express');
const app = express();

const server = app.listen(3001, () => {
    console.log('Start Server; 3001')
})

app.get('/api/:actor', async (req, res) => {
    const {actor} = req.params;
    let data = {name : "아영", age : "24"};
    if (actor === 'seoul'){
        res.send(data);
    }
})