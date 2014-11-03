module.exports = EntypoMute;
function EntypoMute(){}
EntypoMute.prototype.view = __dirname;
EntypoMute.prototype.init = function(model) {
	model.setNull("size", 20);
}