module.exports = EntypoSound;
function EntypoSound(){}
EntypoSound.prototype.view = __dirname;
EntypoSound.prototype.init = function(model) {
	model.setNull("size", 20);
}