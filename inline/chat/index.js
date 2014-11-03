module.exports = EntypoChat;
function EntypoChat(){}
EntypoChat.prototype.view = __dirname;
EntypoChat.prototype.init = function(model) {
	model.setNull("size", 20);
}