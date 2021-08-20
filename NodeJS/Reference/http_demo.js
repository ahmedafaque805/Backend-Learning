const http = require('http')

// Create Server Object
http.createServer((req,res) => {
    // Write Response
    res.write('hello')
    res.end()
}).listen(5000,()=> console.log('Server running...'))