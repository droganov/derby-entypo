module.exports = EntypoUsers;
function EntypoUsers(){}
EntypoUsers.prototype.view = __dirname;
EntypoUsers.prototype.init = function(model) {
	model.setNull("size", 20);
}