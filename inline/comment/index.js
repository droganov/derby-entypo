module.exports = EntypoComment;
function EntypoComment(){}
EntypoComment.prototype.view = __dirname;
EntypoComment.prototype.init = function(model) {
	model.setNull("size", 20);
}