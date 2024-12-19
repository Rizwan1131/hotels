const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //req.body
const personRoutes = require('./routes/PersonRoutes');
const menuitemRoutes = require('./routes/manuItemRoute');
const PORT = process.env.PORT || 3000;


app.get('/', (req,res)=>{
    res.send("Server created");
})


app.use('/person', personRoutes);
app.use('/menuitem',menuitemRoutes);

app.listen(PORT, ()=>{
    console.log("Server is lesting PORT 3000");
})
