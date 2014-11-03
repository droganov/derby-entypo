module.exports = EntypoLandscape;
function EntypoLandscape(){}
EntypoLandscape.prototype.view = __dirname;
EntypoLandscape.prototype.init = function(model) {
	model.setNull("size", 20);
}