module.exports = EntypoVcard;
function EntypoVcard(){}
EntypoVcard.prototype.view = __dirname;
EntypoVcard.prototype.init = function(model) {
	model.setNull("size", 20);
}