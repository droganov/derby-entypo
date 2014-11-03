module.exports = EntypoPrinter;
function EntypoPrinter(){}
EntypoPrinter.prototype.view = __dirname;
EntypoPrinter.prototype.init = function(model) {
	model.setNull("size", 20);
}