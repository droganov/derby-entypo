module.exports = EntypoLast;
function EntypoLast(){}
EntypoLast.prototype.view = __dirname;
EntypoLast.prototype.init = function(model) {
	model.setNull("size", 20);
}