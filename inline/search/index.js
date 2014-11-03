module.exports = EntypoSearch;
function EntypoSearch(){}
EntypoSearch.prototype.view = __dirname;
EntypoSearch.prototype.init = function(model) {
	model.setNull("size", 20);
}