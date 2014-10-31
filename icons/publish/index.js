module.exports = EntypoPublish;
function EntypoPublish(){}
EntypoPublish.prototype.view = __dirname;
EntypoPublish.prototype.init = function(model) {
	model.setNull("size", 20);
}