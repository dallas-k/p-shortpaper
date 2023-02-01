const fs = require('fs');
const express = require('express');
const { resolveNaptr } = require('dns');
const app = express();

const server = app.listen(3001, () => {
    console.log('Start Server; 3001')
    fs.readFile('./actors.json', (err, data) => {
        if (err) throw err
        const actors = () => JSON.parse(data);
    })
})

app.get('/api/actors', async (req, res) => {
    res.sendFile(__dirname + '/actors.json', (err) => {
        if (err) res.sendStatus(400);
        else console.log('sending completed');
    });
})

app.get("/api/actors/:name", async (req, res) => {
  const { name } = req.params;
  fs.readFile("./actors.json", (err, data) => {
    if (err) throw err;
    const actors = JSON.parse(data);
    for (let i = 0; i < actors.length; i++) {
      if (name === actors[i].idx) {
        return res.send(actors[i]);
      } 
    }
    return res.status(400).json({
        status : 'error',
        error : `요청 parameter ${name}이/가 데이터가 존재하지 않습니다`
    })
  });
});