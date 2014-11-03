module.exports = EntypoClipboard;
function EntypoClipboard(){}
EntypoClipboard.prototype.view = __dirname;
EntypoClipboard.prototype.init = function(model) {
	model.setNull("size", 20);
}