module.exports = EntypoInstall;
function EntypoInstall(){}
EntypoInstall.prototype.view = __dirname;
EntypoInstall.prototype.init = function(model) {
	model.setNull("size", 20);
}