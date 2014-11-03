module.exports = EntypoQuestion;
function EntypoQuestion(){}
EntypoQuestion.prototype.view = __dirname;
EntypoQuestion.prototype.init = function(model) {
	model.setNull("size", 20);
}