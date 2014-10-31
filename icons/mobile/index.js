module.exports = EntypoMobile;
function EntypoMobile(){}
EntypoMobile.prototype.view = __dirname;
EntypoMobile.prototype.init = function(model) {
	model.setNull("size", 20);
}