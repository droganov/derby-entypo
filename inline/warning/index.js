module.exports = EntypoWarning;
function EntypoWarning(){}
EntypoWarning.prototype.view = __dirname;
EntypoWarning.prototype.init = function(model) {
	model.setNull("size", 20);
}