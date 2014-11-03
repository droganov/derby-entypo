module.exports = EntypoList;
function EntypoList(){}
EntypoList.prototype.view = __dirname;
EntypoList.prototype.init = function(model) {
	model.setNull("size", 20);
}