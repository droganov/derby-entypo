module.exports = EntypoQuote;
function EntypoQuote(){}
EntypoQuote.prototype.view = __dirname;
EntypoQuote.prototype.init = function(model) {
	model.setNull("size", 20);
}