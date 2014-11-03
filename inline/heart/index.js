module.exports = EntypoHeart;
function EntypoHeart(){}
EntypoHeart.prototype.view = __dirname;
EntypoHeart.prototype.init = function(model) {
	model.setNull("size", 20);
}