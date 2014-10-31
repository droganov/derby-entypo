module.exports = EntypoVk;
function EntypoVk(){}
EntypoVk.prototype.view = __dirname;
EntypoVk.prototype.init = function(model) {
	model.setNull("size", 20);
}