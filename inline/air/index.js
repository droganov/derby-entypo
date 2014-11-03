module.exports = EntypoAir;
function EntypoAir(){}
EntypoAir.prototype.view = __dirname;
EntypoAir.prototype.init = function(model) {
	model.setNull("size", 20);
}