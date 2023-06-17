const http=require('http')
const fs=require('fs')
const _=require('lodash');



const server=http.createServer((req,res) =>{
//console.log(req.url,req.method)
//lodash
const num= _.random(0,20);
console.log(num);

const greet=_.once(()=>{
    console.log('hello')
});
greet();
greet();
//res.setHeader('Content-Type','textplain')
//res.write('hello world')
//res.write('i am arshad qureshi')
res.setHeader('Content-Type','text/html')

let path='./view-html/';
switch(req.url){
case '/':
   path+='view.html';
   res.statusCode=200;
   break;
case '/about':
   path+='about.html';
   res.statusCode=200;
   break;
case '/about-us':
   
   res.statusCode=301;
   res.setHeader('Location','/about');
   res.end();
default :
   path+='404.html'
   res.statusCode=404;
   break;
}

fs.readFile(path,(err,data)=>{
    if (err){
        console.log(err);
        res.end();
    }
    else {
       
        res.end(data);
    }
    
})

//res.write('<p>hello world</p>')
//res.write('<p>hello again</p>')

});
server.listen(3000,'localhost',() =>{
    console.log('littensing for the request from port no 3000')
})