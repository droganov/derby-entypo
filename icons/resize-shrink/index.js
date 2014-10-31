module.exports = EntypoResizeShrink;
function EntypoResizeShrink(){}
EntypoResizeShrink.prototype.view = __dirname;
EntypoResizeShrink.prototype.init = function(model) {
	model.setNull("size", 20);
}