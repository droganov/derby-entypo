module.exports = EntypoBook;
function EntypoBook(){}
EntypoBook.prototype.view = __dirname;
EntypoBook.prototype.init = function(model) {
	model.setNull("size", 20);
}