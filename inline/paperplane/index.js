module.exports = EntypoPaperplane;
function EntypoPaperplane(){}
EntypoPaperplane.prototype.view = __dirname;
EntypoPaperplane.prototype.init = function(model) {
	model.setNull("size", 20);
}