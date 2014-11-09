var express = require('express');
var glob = require('glob');
var path = require('path');

module.exports = function(){	
  return {     
      createServer:createServer()    
  }    
}

function createServer(){
  console.log('In createServer');    
  var app = express();
  // TODO: Add app.use for body parser, cookie Parser etc 
  //app.use(express.bodyParser());
  //app.use(express.cookieParser());
  app.listen(3000);
  var components = loadComponents();
  routeHandling(app,components);
}

function loadComponents(){
  var componentRoutes =  glob.sync('**/*.js', {cwd:path.join(process.cwd(),'/app')});
  var numberOfComponents = componentRoutes.length;
  for(i=0; i<numberOfComponents;i++){
    componentRoutes[i] = require(path.join(process.cwd(),'/app',componentRoutes[i]))();        
  }
  return componentRoutes;
}

function routeHandling(app,components){
  for(i=0; i<components.length;i++){    
    app[components[i].routeVerb](components[i].route,components[i].postProcessor);
  }
}