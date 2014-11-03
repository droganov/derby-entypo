module.exports = EntypoReplyAll;
function EntypoReplyAll(){}
EntypoReplyAll.prototype.view = __dirname;
EntypoReplyAll.prototype.init = function(model) {
	model.setNull("size", 20);
}