const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;
app.use('/', router);

app.listen(port, ()=>{
    console.log(`Segundo entregable is working on port ${port}`);
});