const mongoose = require('mongoose');
require('dotenv').config();

//const mongourl = process.env.DB_LOCAL_URL
const mongourl = process.env.DB_URL

mongoose.connect(mongourl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });

const db = mongoose.connection;

db.on('connected', ()=>{
    console.error("connected to mongo DB server");
});

db.on('error', (error)=>{
    console.log(error);
})

db.on('disconnected', ()=>{
    console.log("disconnected to mongo DB server");
});

module.exports = db;