module.exports = EntypoTarget;
function EntypoTarget(){}
EntypoTarget.prototype.view = __dirname;
EntypoTarget.prototype.init = function(model) {
	model.setNull("size", 20);
}