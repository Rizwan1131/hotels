const express = require('express')
const route = express.Router();
const Person = require('../Person')

route.post('/', async (req,res)=>{
    try {
     const data = req.body; //yaha hame data mil raha hai
     const newPerson = new Person(data);
     const response = await newPerson.save();
     console.log("Data saved");
     res.status(200).json(response)
    
     } catch (error) {
         console.log(error);
         res.status(500).json({error:"internal server error"});
    }   
 })

route.get('/',  async(req,res)=>{
    try {
        const data = await Person.find();
        console.log("Person Data Fetched");
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"});
    }
})

route.get('/:workType' , async(req, res)=>{
    try {
      const workType = req.params.workType;
      // validation
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
          const response = await Person.find({work:workType});
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

  route.put('/:id',async (req ,res)=>{
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {new:true, runValidators:true});
        if(!response){
            res.status(404).json({error:"person not found"})
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
  });

  route.delete('/:id' ,async (req,res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({error:"person not found"})
        }
        console.log('data deleted');
        res.status(200).json({message: "person deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
  })

  module.exports = route;