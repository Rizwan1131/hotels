const express = require('express')
const route = express.Router();
const menuItem = require('../MenuItem');

route.post('/',  async (req , res)=>{
    try {
        const data = req.body;
        const newMenuItem = new menuItem(data);
        const response = await newMenuItem.save();
        console.log(" manu item saved");
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
});

route.get('/',async (req ,res)=>{
   try {
     const data = await menuItem.find()
     console.log("MenuItem  Fetched");
     res.status(200).json(data)
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"internal server error"});
   }
})

route.get('/:tasteType', async (req , res)=>{
    try {
     const tasteType = req.params.tasteType;
     if(tasteType == 'Sweet'|| tasteType == 'Spicy' || tasteType == 'Sour'){
         const response = await MenuItem.find({taste:tasteType});
         console.log("Response fetch");
         res.status(200).json(response);
 
     }
     else{
         res.status(404).json({error:'Invalid work type'})
     }
    } catch (error) {
     console.log(error);
     res.status(500).json({error:'Internal server error'})
    }
 
 })

//  comment addes for testing purpose

 module.exports = route;