module.exports = EntypoInstagram;
function EntypoInstagram(){}
EntypoInstagram.prototype.view = __dirname;
EntypoInstagram.prototype.init = function(model) {
	model.setNull("size", 20);
}