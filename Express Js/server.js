const express = require('express');
const path = require('path');
const logger = require('./middleWare/Logger')

//  Initialize
const app = express();

// init Middleware
// app.use(logger)

// Body Parse Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Set Static Folder
app.use(express.static(path.join(__dirname,'Public')))

// Members Api Route
app.use('/api/members', require('./routes/api/Members') )

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on : ${PORT} `))