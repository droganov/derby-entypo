module.exports = EntypoDocs;
function EntypoDocs(){}
EntypoDocs.prototype.view = __dirname;
EntypoDocs.prototype.init = function(model) {
	model.setNull("size", 20);
}