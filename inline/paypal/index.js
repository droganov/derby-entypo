module.exports = EntypoPaypal;
function EntypoPaypal(){}
EntypoPaypal.prototype.view = __dirname;
EntypoPaypal.prototype.init = function(model) {
	model.setNull("size", 20);
}