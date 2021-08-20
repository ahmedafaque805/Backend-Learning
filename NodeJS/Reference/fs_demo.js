const fs = require('fs')
const path = require('path')

// Create Folder
// fs.mkdir(path.join(__dirname,'Test'),{},(err) => {
//     if(err)
//     throw err;
//     console.log('Folder Created...')
// } )

// Create and write File
// fs.writeFile(path.join(__dirname,'Test','Example.txt'),'Hello !',(err) => {
//     if(err)
//     throw err;
//     console.log('File Created and Written...')
// } )


// Read File
// fs.readFile(path.join(__dirname,'Test','Example.txt'),'utf8',(err,data) => {
//     if(err)
//     throw err;
//     console.log(data)
// } )

// Rename File
// fs.rename(path.join(__dirname, 'Test', 'Example.txt'), path.join(__dirname, 'Test', 'ExampleRenamed.txt'), (err) => {
//     if (err)
//         throw err;
//     console.log('Renamed ...')
// })