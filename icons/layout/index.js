module.exports = EntypoLayout;
function EntypoLayout(){}
EntypoLayout.prototype.view = __dirname;
EntypoLayout.prototype.init = function(model) {
	model.setNull("size", 20);
}