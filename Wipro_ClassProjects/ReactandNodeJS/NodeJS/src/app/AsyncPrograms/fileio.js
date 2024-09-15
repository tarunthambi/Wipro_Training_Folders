import { readFileSync,readFile} from 'fs';
import fs from 'fs/promises'

//Synchronous IO

const data=readFileSync('data.txt','utf-8'); //Blocks until complete file is read

console.log(data);

//Asynchronous IO
readFile('data.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Reading from data - 1")
        console.log(data);
    }
})

console.log("1. This will be printed before the file is read"); //Non Blocking

//Using promises
async function readFileData(path){
    try
    {
        const data=await fs.readFile(path,'utf-8');
        console.log("Reading from data - 2")
        console.log(data);
    }
    catch(err)
    {
        console.log(err);
    }
}

readFileData('data.txt');
console.log("2. This will be printed before the file is read"); //Non Blocking

//using async-await
(async()=>{
    await readFileData('data.txt');
    console.log("This will be printed after the file is read"); //Awaits Promise Resolution
})();