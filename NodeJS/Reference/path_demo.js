const path = require('path')

// Base file name
console.log(path.basename(__filename))

// Base Directory name
console.log(path.dirname(__filename))

// File Extension
console.log(path.extname(__filename))

// Create Path Object
console.log(path.parse(__filename))

// Concate Path
console.log(path.join(__dirname,'test','hello.js'))
