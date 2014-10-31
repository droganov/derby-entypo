module.exports = EntypoRenren;
function EntypoRenren(){}
EntypoRenren.prototype.view = __dirname;
EntypoRenren.prototype.init = function(model) {
	model.setNull("size", 20);
}