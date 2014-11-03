module.exports = EntypoLogin;
function EntypoLogin(){}
EntypoLogin.prototype.view = __dirname;
EntypoLogin.prototype.init = function(model) {
	model.setNull("size", 20);
}