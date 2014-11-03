module.exports = EntypoList2;
function EntypoList2(){}
EntypoList2.prototype.view = __dirname;
EntypoList2.prototype.init = function(model) {
	model.setNull("size", 20);
}