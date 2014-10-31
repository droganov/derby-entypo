module.exports = EntypoCalendar;
function EntypoCalendar(){}
EntypoCalendar.prototype.view = __dirname;
EntypoCalendar.prototype.init = function(model) {
	model.setNull("size", 20);
}