module.exports = EntypoTwitter;
function EntypoTwitter(){}
EntypoTwitter.prototype.view = __dirname;
EntypoTwitter.prototype.init = function(model) {
	model.setNull("size", 20);
}