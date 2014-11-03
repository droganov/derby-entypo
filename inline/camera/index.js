module.exports = EntypoCamera;
function EntypoCamera(){}
EntypoCamera.prototype.view = __dirname;
EntypoCamera.prototype.init = function(model) {
	model.setNull("size", 20);
}