const http = require('http')
const axios = require('axios')
require('dotenv').config()
const fs = require('fs');

const port = process.env.PORT || 3000

const pageDir = './src/pages/'
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  if(req.url==='/'||req.url==='/about'||req.url==='/contact-me'||req.url==="/styles/style.css"){
    console.log('req.url: ',req.url)
    if(req.url==='/'){
      fs.readFile(pageDir+'index.html',(err, data)=>{
        if(err) throw err;
        return res.end(data);
      })
    }else{
      if(req.url==="/styles/style.css"){
        fs.readFile('./src/styles/style.css',(err, data)=>{
          if(err) throw err;
          res.writeHead(200, {'Content-Type': 'text/css'})
          return res.end(data);
        })        
      }else{
        fs.readFile(pageDir+req.url.slice(1)+'.html',(err, data)=>{
          if(err) throw err;
          res.writeHead(200, {'Content-Type': 'text/html'})
          return res.end(data);
        })
      }
    }
  }
  else{
    fs.readFile(pageDir+'404.html', (err, data) =>{
      if(err) throw err
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(data)
    })
  }
  // res.end(pageDir+'index.html');
  // if(req.url==='/'){
  //   fs.readFileSync(pageDir+'index.html', (err, data)=>{
  //     if (err) throw err;
  //     res.writeHead(200, {'Content-Type': 'text/html'})
  //     res.write(data)
  //     return res.end
  //   })
  // }else if(req.url==='/about'){
  //   fs.readFileSync(pageDir+'about.html', (err, data)=>{
  //     if (err) throw err;
  //     res.writeHead(200, {'Content-Type': 'text/html'})
  //     res.write(data)
  //     return res.end;
  //   })
  // }else{
  //   fs.readFileSync(pageDir+'404.html', (err, data)=>{
  //     if (err) throw err;
  //     res.writeHead(200, {'Content-Type': 'text/html'})
  //     res.write(data)
  //     return res.end;
  //   })
  // }
})


// axios
//     .get('index.html')
//     .then(res => {

//     })
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})