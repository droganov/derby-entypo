module.exports = EntypoUser;
function EntypoUser(){}
EntypoUser.prototype.view = __dirname;
EntypoUser.prototype.init = function(model) {
	model.setNull("size", 20);
}