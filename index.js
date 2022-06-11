const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000

app.use(function (req,res,next){
	res.status(404).sendFile(__dirname+'/src/pages/404.html');
});


app.get('/',(req, res)=>{
  // res.send("Hello World!");
  res.sendFile(__dirname+'/src/pages/index.html')
})

app.get('/about', (req, res)=>{
  res.sendFile(__dirname+'/src/pages/about.html');
})

app.get('/contact-me', (req, res)=>{
  res.sendFile(__dirname+'/src/pages/contact-me.html');
})

app.get('/styles/style.css', (req, res)=>{
  // res.writeHead(200, {'Content-Type':'text/css'})
  res.sendFile(__dirname+'/src/styles/style.css');
})


// const http = require('http')
// const axios = require('axios')
// require('dotenv').config()
// const fs = require('fs');

// const port = process.env.PORT || 3000

// const pageDir = './src/pages/'
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   if(req.url==='/'||req.url==='/about'||req.url==='/contact-me'||req.url==="/styles/style.css"){
//     console.log('req.url: ',req.url)
//     if(req.url==='/'){
//       fs.readFile(pageDir+'index.html',(err, data)=>{
//         if(err) throw err;
//         return res.end(data);
//       })
//     }else{
//       if(req.url==="/styles/style.css"){
//         fs.readFile('./src/styles/style.css',(err, data)=>{
//           if(err) throw err;
//           res.writeHead(200, {'Content-Type': 'text/css'})
//           return res.end(data);
//         })        
//       }else{
//         fs.readFile(pageDir+req.url.slice(1)+'.html',(err, data)=>{
//           if(err) throw err;
//           res.writeHead(200, {'Content-Type': 'text/html'})
//           return res.end(data);
//         })
//       }
//     }
//   }
//   else{
//     fs.readFile(pageDir+'404.html', (err, data) =>{
//       if(err) throw err
//       res.writeHead(200, {'Content-Type': 'text/html'})
//       res.end(data)
//     })
//   }
// })

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})