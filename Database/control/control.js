const productmoddele = require("../Moddele/Products");



// const Storege = multer.diskStorage({
//     destination:'uploads',
//     filename:(req, file ,cb) =>{
//         cb(null,file.originalname)
//     },
// });
// const upload =multer({
//     storage:Storege
// }).single('testImage')




const getdata =async (req,res)=>{
    const alldata = await productmoddele.find();
    res.send(alldata);
}


const getchocolate = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"chocolates"});
    res.send(alldata);
}
const getsweet = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"sweet"});
    res.send(alldata);
}
const getfood = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"food"});
    res.send(alldata);
}
const getbak = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"Bakries"});
    res.send(alldata);
}



const putdata = async (req,res) =>{
  // console.log(req.file,req.body);
  console.log('all data started from heree');
    
      const  product_name = req.body.pro; 
      const Name = req.body.nm;
      const quantity = req.body.qnt;
      const prise = req.body.ps;
      const img1 = req.file.path;
    
      
    console.log(product_name);
    console.log(Name);
    console.log(quantity);
    console.log(prise);
    console.log(img1);

    if(
        !product_name || !Name || !quantity || !prise || !img1
    )
    {
        res.status(404);
        throw new Error("please input all the field");
    }

    
       
    const newUser = new productmoddele({  
       
         product_name,
          Name,
          quantity,
          prise,
          img1,
        
      });
    
      await newUser.save();
      res.json(newUser);
}
module.exports ={getdata , putdata,getchocolate ,getsweet ,getfood ,getbak};