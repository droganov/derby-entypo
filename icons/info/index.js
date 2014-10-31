module.exports = EntypoInfo;
function EntypoInfo(){}
EntypoInfo.prototype.view = __dirname;
EntypoInfo.prototype.init = function(model) {
	model.setNull("size", 20);
}