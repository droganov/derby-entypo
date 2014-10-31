module.exports = EntypoVideo;
function EntypoVideo(){}
EntypoVideo.prototype.view = __dirname;
EntypoVideo.prototype.init = function(model) {
	model.setNull("size", 20);
}