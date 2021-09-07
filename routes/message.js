const router= require("express").Router();
const Message= require("../models/Message");

router.post("/addname",async(req,res)=>{
    const newMessage= new Message(req.body);
    try{
        const mess=await newMessage.save();
        res.status(200).json(mess);
    }catch(err){
        console.log("plzz fill the email correctly");
        res.status(500).json(err);
    }
});

module.exports=router;