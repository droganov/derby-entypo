module.exports = EntypoUserAdd;
function EntypoUserAdd(){}
EntypoUserAdd.prototype.view = __dirname;
EntypoUserAdd.prototype.init = function(model) {
	model.setNull("size", 20);
}