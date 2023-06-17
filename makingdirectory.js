const fs=require('fs')
fs.mkdir('./folder',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created')
})
