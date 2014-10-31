module.exports = EntypoSwitch;
function EntypoSwitch(){}
EntypoSwitch.prototype.view = __dirname;
EntypoSwitch.prototype.init = function(model) {
	model.setNull("size", 20);
}