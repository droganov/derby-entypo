module.exports = EntypoStatistics;
function EntypoStatistics(){}
EntypoStatistics.prototype.view = __dirname;
EntypoStatistics.prototype.init = function(model) {
	model.setNull("size", 20);
}