console.log("In App");
var appLibStart = require(process.cwd()+'/lib/app/framework/appLibStart');

if(require.main === module) {	
	appLibStart().createServer;
}
