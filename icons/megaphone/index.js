module.exports = EntypoMegaphone;
function EntypoMegaphone(){}
EntypoMegaphone.prototype.view = __dirname;
EntypoMegaphone.prototype.init = function(model) {
	model.setNull("size", 20);
}