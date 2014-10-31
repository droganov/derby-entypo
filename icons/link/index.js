module.exports = EntypoLink;
function EntypoLink(){}
EntypoLink.prototype.view = __dirname;
EntypoLink.prototype.init = function(model) {
	model.setNull("size", 20);
}