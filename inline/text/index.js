module.exports = EntypoText;
function EntypoText(){}
EntypoText.prototype.view = __dirname;
EntypoText.prototype.init = function(model) {
	model.setNull("size", 20);
}