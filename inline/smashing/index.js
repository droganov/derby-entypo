module.exports = EntypoSmashing;
function EntypoSmashing(){}
EntypoSmashing.prototype.view = __dirname;
EntypoSmashing.prototype.init = function(model) {
	model.setNull("size", 20);
}