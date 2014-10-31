module.exports = EntypoErase;
function EntypoErase(){}
EntypoErase.prototype.view = __dirname;
EntypoErase.prototype.init = function(model) {
	model.setNull("size", 20);
}