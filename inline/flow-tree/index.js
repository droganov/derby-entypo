module.exports = EntypoFlowTree;
function EntypoFlowTree(){}
EntypoFlowTree.prototype.view = __dirname;
EntypoFlowTree.prototype.init = function(model) {
	model.setNull("size", 20);
}