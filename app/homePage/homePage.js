module.exports = function(){
	return {
		route: '/',
		routeVerb: 'get',
    postProcessor: function(req,res){      
      res.end('Welcome To My Site Home');
    }
	}
}