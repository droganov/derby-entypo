module.exports = EntypoLoop;
function EntypoLoop(){}
EntypoLoop.prototype.view = __dirname;
EntypoLoop.prototype.init = function(model) {
	model.setNull("size", 20);
}