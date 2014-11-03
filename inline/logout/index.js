module.exports = EntypoLogout;
function EntypoLogout(){}
EntypoLogout.prototype.view = __dirname;
EntypoLogout.prototype.init = function(model) {
	model.setNull("size", 20);
}