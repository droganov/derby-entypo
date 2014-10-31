module.exports = EntypoPlus3;
function EntypoPlus3(){}
EntypoPlus3.prototype.view = __dirname;
EntypoPlus3.prototype.init = function(model) {
	model.setNull("size", 20);
}