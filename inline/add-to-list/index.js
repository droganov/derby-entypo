module.exports = EntypoAddToList;
function EntypoAddToList(){}
EntypoAddToList.prototype.view = __dirname;
EntypoAddToList.prototype.init = function(model) {
	model.setNull("size", 20);
}