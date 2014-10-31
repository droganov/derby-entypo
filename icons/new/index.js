module.exports = EntypoNew;
function EntypoNew(){}
EntypoNew.prototype.view = __dirname;
EntypoNew.prototype.init = function(model) {
	model.setNull("size", 20);
}