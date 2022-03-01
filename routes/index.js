var authController = require('../api/controllers/authController');
var roleController = require('../api/controllers/roleController');



module.exports = function (app) {
    
    app.post('/role', roleController.checkExistingRole, roleController.createNewRole);


    
    app.put('/role/:role_id', roleController.updateRole);


    app.post('/authenticate', authController.validateCredential);
    app.post('/token-details', authController.getTokenDetails);

    app.get('/test/big/job', roleController.runBigJob)
    app.get('/test/small/job', roleController.runSmallJob)
  }
