module.exports = EntypoQq;
function EntypoQq(){}
EntypoQq.prototype.view = __dirname;
EntypoQq.prototype.init = function(model) {
	model.setNull("size", 20);
}