module.exports = EntypoTwitter2;
function EntypoTwitter2(){}
EntypoTwitter2.prototype.view = __dirname;
EntypoTwitter2.prototype.init = function(model) {
	model.setNull("size", 20);
}