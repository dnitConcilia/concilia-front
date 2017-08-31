var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'concilia',
  description: 'Aplicação do concilia desenvolvida em angular 4',
  script: 'C:\\projetos\\concilia-front\\app.js'
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();