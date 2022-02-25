var authCtlr = require('../api/controllers/authController');


module.exports = function (app) {
    
    app.post('/authenticate', authCtlr.validateCredential);
    app.post('/token-details', authCtlr.getTokenDetails);

  }
