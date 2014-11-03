module.exports = EntypoInfo2;
function EntypoInfo2(){}
EntypoInfo2.prototype.view = __dirname;
EntypoInfo2.prototype.init = function(model) {
	model.setNull("size", 20);
}