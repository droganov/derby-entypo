module.exports = EntypoCart;
function EntypoCart(){}
EntypoCart.prototype.view = __dirname;
EntypoCart.prototype.init = function(model) {
	model.setNull("size", 20);
}