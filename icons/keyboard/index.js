module.exports = EntypoKeyboard;
function EntypoKeyboard(){}
EntypoKeyboard.prototype.view = __dirname;
EntypoKeyboard.prototype.init = function(model) {
	model.setNull("size", 20);
}