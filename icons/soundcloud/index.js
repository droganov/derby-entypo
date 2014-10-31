module.exports = EntypoSoundcloud;
function EntypoSoundcloud(){}
EntypoSoundcloud.prototype.view = __dirname;
EntypoSoundcloud.prototype.init = function(model) {
	model.setNull("size", 20);
}