module.exports = EntypoNext;
function EntypoNext(){}
EntypoNext.prototype.view = __dirname;
EntypoNext.prototype.init = function(model) {
	model.setNull("size", 20);
}