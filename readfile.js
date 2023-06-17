const fs=require('fs')
fs.readFile('./blog.txt',
(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString);
})