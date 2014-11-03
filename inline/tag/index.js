module.exports = EntypoTag;
function EntypoTag(){}
EntypoTag.prototype.view = __dirname;
EntypoTag.prototype.init = function(model) {
	model.setNull("size", 20);
}