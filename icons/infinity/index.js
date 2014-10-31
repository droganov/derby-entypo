module.exports = EntypoInfinity;
function EntypoInfinity(){}
EntypoInfinity.prototype.view = __dirname;
EntypoInfinity.prototype.init = function(model) {
	model.setNull("size", 20);
}