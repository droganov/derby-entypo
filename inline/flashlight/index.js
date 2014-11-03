module.exports = EntypoFlashlight;
function EntypoFlashlight(){}
EntypoFlashlight.prototype.view = __dirname;
EntypoFlashlight.prototype.init = function(model) {
	model.setNull("size", 20);
}