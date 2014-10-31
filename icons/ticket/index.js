module.exports = EntypoTicket;
function EntypoTicket(){}
EntypoTicket.prototype.view = __dirname;
EntypoTicket.prototype.init = function(model) {
	model.setNull("size", 20);
}