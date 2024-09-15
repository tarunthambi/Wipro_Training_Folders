const fs=require('fs');
let str="";
const readStream=fs.createReadStream('./data.txt');
readStream.on('data',(chunk)=>{
    console.log("New Chunk Received:",chunk);
    console.log(chunk.toString());
    str=str+chunk;
    console.log(str);
});

readStream.on('end',()=>{
    console.log("Reading Finished.")
});

readStream.on('error',(err)=>{
    console.log('Error Occured: ',err);
})