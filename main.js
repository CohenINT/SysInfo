const si = require('systeminformation');

// promises style - new since version 3
si.fsSize()
  .then(data => console.log(data))
  .catch(error => console.error(error));

  
