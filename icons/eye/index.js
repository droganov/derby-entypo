module.exports = EntypoEye;
function EntypoEye(){}
EntypoEye.prototype.view = __dirname;
EntypoEye.prototype.init = function(model) {
	model.setNull("size", 20);
}