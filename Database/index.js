const express = require('express');
const createdata = require('./Db/Dbconnection');
const routerr = require('./Routers/Routers');

const cors = require('cors')
const app = express();

createdata();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:false}));
app.use('/' ,routerr)
app.use('/uploads',express.static('uploads'))


app.listen(4000 , () =>{
    console.log('server is ruunning 4000 code')
})
