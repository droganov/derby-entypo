module.exports = EntypoBack;
function EntypoBack(){}
EntypoBack.prototype.view = __dirname;
EntypoBack.prototype.init = function(model) {
	model.setNull("size", 20);
}