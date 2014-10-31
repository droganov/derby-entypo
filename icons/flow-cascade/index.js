module.exports = EntypoFlowCascade;
function EntypoFlowCascade(){}
EntypoFlowCascade.prototype.view = __dirname;
EntypoFlowCascade.prototype.init = function(model) {
	model.setNull("size", 20);
}