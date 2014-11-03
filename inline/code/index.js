module.exports = EntypoCode;
function EntypoCode(){}
EntypoCode.prototype.view = __dirname;
EntypoCode.prototype.init = function(model) {
	model.setNull("size", 20);
}