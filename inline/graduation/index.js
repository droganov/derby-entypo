module.exports = EntypoGraduation;
function EntypoGraduation(){}
EntypoGraduation.prototype.view = __dirname;
EntypoGraduation.prototype.init = function(model) {
	model.setNull("size", 20);
}