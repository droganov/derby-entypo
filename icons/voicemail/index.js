module.exports = EntypoVoicemail;
function EntypoVoicemail(){}
EntypoVoicemail.prototype.view = __dirname;
EntypoVoicemail.prototype.init = function(model) {
	model.setNull("size", 20);
}