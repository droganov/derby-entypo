module.exports = EntypoLock;
function EntypoLock(){}
EntypoLock.prototype.view = __dirname;
EntypoLock.prototype.init = function(model) {
	model.setNull("size", 20);
}