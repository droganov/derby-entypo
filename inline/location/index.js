module.exports = EntypoLocation;
function EntypoLocation(){}
EntypoLocation.prototype.view = __dirname;
EntypoLocation.prototype.init = function(model) {
	model.setNull("size", 20);
}