const  mongoose = require('mongoose');
const schema = mongoose.Schema({
    product_name :{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true   
    },
    prise:{
        type:Number,
        required:true
    },
    img1:{
       type:String,
       required:true

    },
    img2:{
        data:Buffer,
        contentType:String

    }


})
const productmoddele = mongoose.model('sweetdata' ,schema);
 module.exports =productmoddele;