module.exports = EntypoPhone;
function EntypoPhone(){}
EntypoPhone.prototype.view = __dirname;
EntypoPhone.prototype.init = function(model) {
	model.setNull("size", 20);
}