module.exports = EntypoFlowLine;
function EntypoFlowLine(){}
EntypoFlowLine.prototype.view = __dirname;
EntypoFlowLine.prototype.init = function(model) {
	model.setNull("size", 20);
}