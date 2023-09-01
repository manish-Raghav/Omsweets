const mongoose = require('mongoose');

const createdata=()=>{
    try{
      const conn=  mongoose.connect('mongodb://127.0.0.1:27017/Omsweet')
      console.log('database connnected Successfuly')
    }
    catch(error)
    {
        console.log('problem in database')
    }
  }

  module.exports =createdata;