module.exports = EntypoMusic;
function EntypoMusic(){}
EntypoMusic.prototype.view = __dirname;
EntypoMusic.prototype.init = function(model) {
	model.setNull("size", 20);
}