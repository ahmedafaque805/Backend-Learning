const express = require('express')
const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path')
const app = express()

// Body Parse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const port = process.env.port || 3000

// app.use('/user',require('./routes/user'))


// // Create Folder
// fs.mkdir(path.join(__dirname,'Test'),{},(err) => {
//     if(err)
//     throw err;
//     console.log('Folder Created...')
// } )

// // Create and write File
// fs.writeFile(path.join(__dirname,'Test','Example.txt'),'Hello Afaque \nhow Are you \nI am fine',(err) => {
//     if(err)
//     throw err;
//     console.log('File Created and Written...')
// } )

// // Moved File
// fsExtra.move(path.join(__dirname,'Test','Example.txt'),path.join(__dirname,'Example.txt'),(err) => {
//     if(err)
//     throw err;
//     console.log('File Moved Successfully...')
// } )

app.listen(port, () => console.log('Sever start'))