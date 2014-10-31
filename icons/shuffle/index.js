module.exports = EntypoShuffle;
function EntypoShuffle(){}
EntypoShuffle.prototype.view = __dirname;
EntypoShuffle.prototype.init = function(model) {
	model.setNull("size", 20);
}