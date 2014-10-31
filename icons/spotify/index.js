module.exports = EntypoSpotify;
function EntypoSpotify(){}
EntypoSpotify.prototype.view = __dirname;
EntypoSpotify.prototype.init = function(model) {
	model.setNull("size", 20);
}