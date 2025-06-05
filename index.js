//INDEX.JS
const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose')
const projectrt = require('./routes/ProjectRoute')
const taskrt = require('./routes/TaskRoute')
const userrt = require('./routes/UserRoute')

app.use(express.json())
app.use('/Project',projectrt)
app.use('/Task',taskrt)
app.use('/User',userrt)

mongoose.connect('mongodb://localhost:27017/ProjectDB').then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
