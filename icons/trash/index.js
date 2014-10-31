module.exports = EntypoTrash;
function EntypoTrash(){}
EntypoTrash.prototype.view = __dirname;
EntypoTrash.prototype.init = function(model) {
	model.setNull("size", 20);
}