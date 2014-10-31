module.exports = EntypoCheckmark;
function EntypoCheckmark(){}
EntypoCheckmark.prototype.view = __dirname;
EntypoCheckmark.prototype.init = function(model) {
	model.setNull("size", 20);
}