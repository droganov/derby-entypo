module.exports = EntypoGoogleplus;
function EntypoGoogleplus(){}
EntypoGoogleplus.prototype.view = __dirname;
EntypoGoogleplus.prototype.init = function(model) {
	model.setNull("size", 20);
}