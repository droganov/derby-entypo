module.exports = EntypoLockOpen;
function EntypoLockOpen(){}
EntypoLockOpen.prototype.view = __dirname;
EntypoLockOpen.prototype.init = function(model) {
	model.setNull("size", 20);
}