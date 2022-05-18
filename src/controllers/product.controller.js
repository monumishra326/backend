const express=require("express")


const router=express.Router()



const Product=require("../models/product.model")


router.get("/",async (req,res)=>{

    const newproduct= await Product.find({}).lean().exec()
    return res.status(200).send({newproduct})


})
module.exports=router