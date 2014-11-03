module.exports = EntypoKey;
function EntypoKey(){}
EntypoKey.prototype.view = __dirname;
EntypoKey.prototype.init = function(model) {
	model.setNull("size", 20);
}