const express = require('express');
const router = require('./router');
require("dotenv").config()
const app = express();
const port = 3000;
const Sequelize = require("sequelize");
app.use('/', router);

app.listen(port, ()=>{
    console.log(`Segundo entregable is working on port ${port}`);
});