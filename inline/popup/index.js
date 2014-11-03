module.exports = EntypoPopup;
function EntypoPopup(){}
EntypoPopup.prototype.view = __dirname;
EntypoPopup.prototype.init = function(model) {
	model.setNull("size", 20);
}