var express = require('express');

module.exports = function(){	
  return {     
      createServer:createServer()    
  }    
}

function createServer(){
  console.log('In createServer');
  var app = express();
  // TODO: Add app.use for body parser, cookie Parser etc  
  app.listen(3000);
  app.get('/',start,function(req,res){
    res.end('Page Hit');
  });
}

function start(req,res,next){
  console.log('In Browser');
  next();
}