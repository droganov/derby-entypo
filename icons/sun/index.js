module.exports = EntypoSun;
function EntypoSun(){}
EntypoSun.prototype.view = __dirname;
EntypoSun.prototype.init = function(model) {
	model.setNull("size", 20);
}