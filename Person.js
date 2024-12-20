const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef', 'waiter', 'manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    adres:{
        type:String,
       
    },
    salary:{
        type:Number,
        required:true,
    }
    

})

const Person = mongoose.model('Person', PersonSchema, "Peson_collection"  );
module.exports = Person;