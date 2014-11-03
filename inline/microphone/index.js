module.exports = EntypoMicrophone;
function EntypoMicrophone(){}
EntypoMicrophone.prototype.view = __dirname;
EntypoMicrophone.prototype.init = function(model) {
	model.setNull("size", 20);
}