module.exports = EntypoShare;
function EntypoShare(){}
EntypoShare.prototype.view = __dirname;
EntypoShare.prototype.init = function(model) {
	model.setNull("size", 20);
}