const fs=require('fs')
fs.writeFile('./blog1.txt','Hello World',
(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log('file written');
})