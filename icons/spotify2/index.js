module.exports = EntypoSpotify2;
function EntypoSpotify2(){}
EntypoSpotify2.prototype.view = __dirname;
EntypoSpotify2.prototype.init = function(model) {
	model.setNull("size", 20);
}