module.exports = EntypoPlay;
function EntypoPlay(){}
EntypoPlay.prototype.view = __dirname;
EntypoPlay.prototype.init = function(model) {
	model.setNull("size", 20);
}