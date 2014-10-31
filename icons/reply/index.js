module.exports = EntypoReply;
function EntypoReply(){}
EntypoReply.prototype.view = __dirname;
EntypoReply.prototype.init = function(model) {
	model.setNull("size", 20);
}