module.exports = EntypoDisk;
function EntypoDisk(){}
EntypoDisk.prototype.view = __dirname;
EntypoDisk.prototype.init = function(model) {
	model.setNull("size", 20);
}