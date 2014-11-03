module.exports = EntypoFlowParallel;
function EntypoFlowParallel(){}
EntypoFlowParallel.prototype.view = __dirname;
EntypoFlowParallel.prototype.init = function(model) {
	model.setNull("size", 20);
}