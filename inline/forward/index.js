module.exports = EntypoForward;
function EntypoForward(){}
EntypoForward.prototype.view = __dirname;
EntypoForward.prototype.init = function(model) {
	model.setNull("size", 20);
}