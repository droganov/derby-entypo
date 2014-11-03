module.exports = EntypoNetwork;
function EntypoNetwork(){}
EntypoNetwork.prototype.view = __dirname;
EntypoNetwork.prototype.init = function(model) {
	model.setNull("size", 20);
}