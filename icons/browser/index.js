module.exports = EntypoBrowser;
function EntypoBrowser(){}
EntypoBrowser.prototype.view = __dirname;
EntypoBrowser.prototype.init = function(model) {
	model.setNull("size", 20);
}