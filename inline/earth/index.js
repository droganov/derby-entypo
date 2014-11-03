module.exports = EntypoEarth;
function EntypoEarth(){}
EntypoEarth.prototype.view = __dirname;
EntypoEarth.prototype.init = function(model) {
	model.setNull("size", 20);
}