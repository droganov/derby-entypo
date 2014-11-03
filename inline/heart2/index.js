module.exports = EntypoHeart2;
function EntypoHeart2(){}
EntypoHeart2.prototype.view = __dirname;
EntypoHeart2.prototype.init = function(model) {
	model.setNull("size", 20);
}