module.exports = EntypoScreen;
function EntypoScreen(){}
EntypoScreen.prototype.view = __dirname;
EntypoScreen.prototype.init = function(model) {
	model.setNull("size", 20);
}