module.exports = EntypoVimeo2;
function EntypoVimeo2(){}
EntypoVimeo2.prototype.view = __dirname;
EntypoVimeo2.prototype.init = function(model) {
	model.setNull("size", 20);
}