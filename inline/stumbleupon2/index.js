module.exports = EntypoStumbleupon2;
function EntypoStumbleupon2(){}
EntypoStumbleupon2.prototype.view = __dirname;
EntypoStumbleupon2.prototype.init = function(model) {
	model.setNull("size", 20);
}