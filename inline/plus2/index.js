module.exports = EntypoPlus2;
function EntypoPlus2(){}
EntypoPlus2.prototype.view = __dirname;
EntypoPlus2.prototype.init = function(model) {
	model.setNull("size", 20);
}