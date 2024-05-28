
const path = require('path');


module.exports = path.dirname(process.mainModule.filename)

//nondepricated option 
//module.exports = path.dirname(require.main.filename)
//