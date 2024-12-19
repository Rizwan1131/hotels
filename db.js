const mongoose = require('mongoose');
const mongourl = 'mongodb://127.0.0.1:27017'

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