module.exports = EntypoDownload;
function EntypoDownload(){}
EntypoDownload.prototype.view = __dirname;
EntypoDownload.prototype.init = function(model) {
	model.setNull("size", 20);
}