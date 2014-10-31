module.exports = EntypoCloud;
function EntypoCloud(){}
EntypoCloud.prototype.view = __dirname;
EntypoCloud.prototype.init = function(model) {
	model.setNull("size", 20);
}