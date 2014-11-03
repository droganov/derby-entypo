module.exports = EntypoGraph;
function EntypoGraph(){}
EntypoGraph.prototype.view = __dirname;
EntypoGraph.prototype.init = function(model) {
	model.setNull("size", 20);
}