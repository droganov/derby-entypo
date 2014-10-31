module.exports = EntypoLastfm;
function EntypoLastfm(){}
EntypoLastfm.prototype.view = __dirname;
EntypoLastfm.prototype.init = function(model) {
	model.setNull("size", 20);
}