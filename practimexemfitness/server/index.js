const express = require("express");
const mongoose = require("mongoose");
const  cors = require("cors");
const PORT = 1050
const app = express();
app.use(cors())
app.use(express.json());
const sectionSchema= new mongoose.Schema({
   cardtitle:  String,
   price: Number,
   title:String,
   img: String
},{timestamps:true})
   
const modelSchema =mongoose.model("Section",sectionSchema);

app.get('/api/gym',async(req,res)=>{
    const Cards = await modelSchema.find()

    if (Cards.length > 0) {
        res.status(200).send({
          message: "success",
          data: Cards,
        });
      } else {
        res.send({
          message: "not found",
          data: null,
        });
      }
});

app.get('/api/gym/:id', async(req,res) => {
     const {id} = req.params;
     let Card;
     try{
        Card = await modelSchema.findById(id);

     } catch(error){
        res.send({
          error:error
        })
     }
     if(Card){
        res.status(200).send({
            message:"succes",
            data:Card,
        })
     }else{
        res.send({
            message:"not succes",
            data:null,
        })
     }
}      
);

app.delete('/api/gym/:id', async(req,res) => {
    const {id} = req.params;
    let response;
    try{
       response = await modelSchema.findByIdAndDelete(id);

    } catch(error){
       res.send({
         error:error
       })
    }
    if(response){
       res.status(200).send({
           message:"deleted",
           data:response,
       })
    }else{
       res.send({
           message:"not deleted",
           data:null,
       })
    }
}      
);

app.post('/api/gym' , async(req,res)=>{
    const Card = new modelSchema(req.body);
    await Card.save()
    res.send({
        message:"posted",
        data:Card,
    })
});





mongoose
  .connect(
  "mongodb+srv://Lacin:Lacin123@cluster0.xvlbv2k.mongodb.net/"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
});


 app.listen(PORT , ()=>{
    console.log("port",`${PORT}`);
 })