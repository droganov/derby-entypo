module.exports = EntypoVimeo;
function EntypoVimeo(){}
EntypoVimeo.prototype.view = __dirname;
EntypoVimeo.prototype.init = function(model) {
	model.setNull("size", 20);
}