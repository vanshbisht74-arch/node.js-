const fs=require("fs")

// Writing the file
// sync 

fs.writeFileSync('./text.txt','Hello world Sync')

//async
fs.writeFile('./text.txt','Hello world Async',(err)=>{});

// The async always need a callback fn as it cannot return the result like the sync .

// Writing the File:-
//sync:-

const readsync=fs.readFileSync("./text.txt",'utf-8')
console.log(readsync)
//async:-The async do not return the result it take a callback to return.

fs.readFile('./text.txt','utf-8',(err,result)=>{

    if(err){
        console.log(err)
    }
    else
    {
       console.log(result)
    }
});
// //Appending:-
fs.appendFileSync('./text.txt','Hey There')


// // //Deleting the File:-
// fs.unlinkSync('./delete.txt');

console.log(fs.statSync("./text.txt"))
fs.mkdirSync("my-docs")

