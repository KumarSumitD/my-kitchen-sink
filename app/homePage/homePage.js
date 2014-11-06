module.exports = function(app){
	app.get('/',start,function(req,res){
	   res.end('Page Hit');
	});
}