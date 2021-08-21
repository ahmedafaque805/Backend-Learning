const http = require('http');
const path = require('path');
const fs = require('fs')

const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'Public','index.html'), 
    //     (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type' : 'text/html'})
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/About'){
    //     fs.readFile(path.join(__dirname,'Public','about.html'), 
    //     (err,content) => {
    //         if(err) throw err;
    //         res.writeHead(200,{'Content-Type' : 'text/html'})
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/api/user'){
    //     const Users = [
    //         {Name: 'Afaque Ahmed', Age:19},
    //         {Name: 'Abdul Aziz', Age:24},
    //         {Name: 'Bilal Mir', Age:23}
    //     ]
    //     res.writeHead(200,{'Content-Type' : 'application/json'})
    //     res.end(JSON.stringify(Users))
    // }


    // Build File Path
    let filePath = path.join(
        __dirname,
        'Public',
        req.url === '/' ? 'index.html' : req.url)

    //  Extention of File
    let extFile = path.extname(filePath)

    // Initial Content Type
    let contentType = 'text/html'

    // Check Ext and Type
    switch (extFile) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //  Page Not Find
                fs.readFile(path.join(__dirname, 'Public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(content , 'utf8')
                })
            } else {
                // Some Server Error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content , 'utf8')
        }
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Running Server on ${PORT}`))