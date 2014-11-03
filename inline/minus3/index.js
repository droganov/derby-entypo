module.exports = EntypoMinus3;
function EntypoMinus3(){}
EntypoMinus3.prototype.view = __dirname;
EntypoMinus3.prototype.init = function(model) {
	model.setNull("size", 20);
}