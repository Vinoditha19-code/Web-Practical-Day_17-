const express = require('express')
const router = express.Router()
const Task = require('../models/Task')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Task.find() 
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})


module.exports=router