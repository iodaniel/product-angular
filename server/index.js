const express = require('express')
const connectDB = require('./config/db');
const cors = require('cors');


//create server
const app = express()
//connect with DB

connectDB();
app.use(cors())
app.use(express.json());

app.use('/api/product', require('./routes/product'));

app.listen(4001, ()=>{
    console.log('server is running correctly')



})