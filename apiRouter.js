//Import
var express= require('express');
const usersCtrl = require('./routes/usersCtrl');
//Router
exports.router = (function(){
var apiRouter=express.Router();

//User routes
apiRouter.route('/users/register/').post(usersCtrl.register);
apiRouter.route('/users/login/').post(usersCtrl.login);

return apiRouter;
})();