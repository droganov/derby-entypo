module.exports = EntypoThumbsup;
function EntypoThumbsup(){}
EntypoThumbsup.prototype.view = __dirname;
EntypoThumbsup.prototype.init = function(model) {
	model.setNull("size", 20);
}