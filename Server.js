const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const routes = require('./routes/TodoRoute')
const http = require('http')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5001
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
app.use(express.json())
// app.use(cors)
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MONGODB"))
.catch( console.error())

app.use(routes);
app.listen(PORT,() => console.log(`listening on ${PORT}`))