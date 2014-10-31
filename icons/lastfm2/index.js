module.exports = EntypoLastfm2;
function EntypoLastfm2(){}
EntypoLastfm2.prototype.view = __dirname;
EntypoLastfm2.prototype.init = function(model) {
	model.setNull("size", 20);
}