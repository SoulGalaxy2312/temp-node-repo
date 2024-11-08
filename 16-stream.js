const {createReadStream} = require('fs')

// highWaterMark -- control size
const stream = createReadStream('../content/big.txt', { 
    highWaterMark: 90000, // 1 buffer == 90000 Bytes
    encoding: 'utf-8'
})

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})