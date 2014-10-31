module.exports = EntypoFeather;
function EntypoFeather(){}
EntypoFeather.prototype.view = __dirname;
EntypoFeather.prototype.init = function(model) {
	model.setNull("size", 20);
}