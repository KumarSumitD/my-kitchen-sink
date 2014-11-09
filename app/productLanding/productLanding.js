module.exports = function(){
	return {
		route: '/productLanding',
		routeVerb: 'get',
    postProcessor: function(req,res){      
      res.end('Welcome To My Site Product Landing');
    }
	}
}