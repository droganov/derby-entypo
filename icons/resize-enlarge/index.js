module.exports = EntypoResizeEnlarge;
function EntypoResizeEnlarge(){}
EntypoResizeEnlarge.prototype.view = __dirname;
EntypoResizeEnlarge.prototype.init = function(model) {
	model.setNull("size", 20);
}