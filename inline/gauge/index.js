module.exports = EntypoGauge;
function EntypoGauge(){}
EntypoGauge.prototype.view = __dirname;
EntypoGauge.prototype.init = function(model) {
	model.setNull("size", 20);
}