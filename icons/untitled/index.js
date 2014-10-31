module.exports = EntypoUntitled;
function EntypoUntitled(){}
EntypoUntitled.prototype.view = __dirname;
EntypoUntitled.prototype.init = function(model) {
	model.setNull("size", 20);
}