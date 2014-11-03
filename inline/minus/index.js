module.exports = EntypoMinus;
function EntypoMinus(){}
EntypoMinus.prototype.view = __dirname;
EntypoMinus.prototype.init = function(model) {
	model.setNull("size", 20);
}