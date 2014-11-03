module.exports = EntypoMixi;
function EntypoMixi(){}
EntypoMixi.prototype.view = __dirname;
EntypoMixi.prototype.init = function(model) {
	model.setNull("size", 20);
}