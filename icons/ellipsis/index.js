module.exports = EntypoEllipsis;
function EntypoEllipsis(){}
EntypoEllipsis.prototype.view = __dirname;
EntypoEllipsis.prototype.init = function(model) {
	model.setNull("size", 20);
}