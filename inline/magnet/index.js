module.exports = EntypoMagnet;
function EntypoMagnet(){}
EntypoMagnet.prototype.view = __dirname;
EntypoMagnet.prototype.init = function(model) {
	model.setNull("size", 20);
}