const express = require('express');
const { getdata, putdata, getchocolate, getsweet, getbak, getfood } = require('../control/control');

 const routerr =express.Router();
 const multer = require('multer');
// const multer  = require('../../src/Pages/Upload');
const upoad = multer({dest:'uploads/'});


 


 routerr.get('/all',getdata);
 routerr.post('/give',upoad.single('img'), putdata);
 routerr.get('/choco',getchocolate);
 routerr.get('/sweet',getsweet);
 routerr.get('/bak',getbak);
 routerr.get('/food',getfood);


 module.exports =routerr;