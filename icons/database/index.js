module.exports = EntypoDatabase;
function EntypoDatabase(){}
EntypoDatabase.prototype.view = __dirname;
EntypoDatabase.prototype.init = function(model) {
	model.setNull("size", 20);
}