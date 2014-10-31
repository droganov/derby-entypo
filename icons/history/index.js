module.exports = EntypoHistory;
function EntypoHistory(){}
EntypoHistory.prototype.view = __dirname;
EntypoHistory.prototype.init = function(model) {
	model.setNull("size", 20);
}