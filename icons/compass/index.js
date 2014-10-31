module.exports = EntypoCompass;
function EntypoCompass(){}
EntypoCompass.prototype.view = __dirname;
EntypoCompass.prototype.init = function(model) {
	model.setNull("size", 20);
}