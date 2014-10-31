module.exports = EntypoVolume;
function EntypoVolume(){}
EntypoVolume.prototype.view = __dirname;
EntypoVolume.prototype.init = function(model) {
	model.setNull("size", 20);
}