module.exports = EntypoThumbsdown;
function EntypoThumbsdown(){}
EntypoThumbsdown.prototype.view = __dirname;
EntypoThumbsdown.prototype.init = function(model) {
	model.setNull("size", 20);
}