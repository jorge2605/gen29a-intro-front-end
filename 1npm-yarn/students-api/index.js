const express = require('express');
const app = express();
const port = 8080;

const songs = [
    { id: 1, name:'jorge',artist:'jorge'},
    { id: 2, name:'valeria',artist:'valeria'},
    { id: 3, name:'karol',artist:'karol'},
]

app.get('/',(req, res)=>{
    res.json(songs)
});

app.listen(port, () => {
    console.log('Servidor iniciado');
});

