module.exports = EntypoSun2;
function EntypoSun2(){}
EntypoSun2.prototype.view = __dirname;
EntypoSun2.prototype.init = function(model) {
	model.setNull("size", 20);
}