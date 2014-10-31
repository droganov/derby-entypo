module.exports = EntypoFlowBranch;
function EntypoFlowBranch(){}
EntypoFlowBranch.prototype.view = __dirname;
EntypoFlowBranch.prototype.init = function(model) {
	model.setNull("size", 20);
}