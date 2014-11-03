module.exports = EntypoStop;
function EntypoStop(){}
EntypoStop.prototype.view = __dirname;
EntypoStop.prototype.init = function(model) {
	model.setNull("size", 20);
}