const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=1000&status=active')

// Host Or Domain
console.log(myUrl.hostname)

// Path Name
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Serialized Query
console.log(myUrl.search)

// Param Object
console.log(myUrl.searchParams)

// Add Param
myUrl.searchParams.append('abc','hi')
console.log(myUrl.searchParams)
