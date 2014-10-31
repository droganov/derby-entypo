module.exports = EntypoPlus;
function EntypoPlus(){}
EntypoPlus.prototype.view = __dirname;
EntypoPlus.prototype.init = function(model) {
	model.setNull("size", 20);
}