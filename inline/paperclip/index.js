module.exports = EntypoPaperclip;
function EntypoPaperclip(){}
EntypoPaperclip.prototype.view = __dirname;
EntypoPaperclip.prototype.init = function(model) {
	model.setNull("size", 20);
}