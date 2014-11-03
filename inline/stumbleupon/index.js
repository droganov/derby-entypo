module.exports = EntypoStumbleupon;
function EntypoStumbleupon(){}
EntypoStumbleupon.prototype.view = __dirname;
EntypoStumbleupon.prototype.init = function(model) {
	model.setNull("size", 20);
}