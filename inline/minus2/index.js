module.exports = EntypoMinus2;
function EntypoMinus2(){}
EntypoMinus2.prototype.view = __dirname;
EntypoMinus2.prototype.init = function(model) {
	model.setNull("size", 20);
}