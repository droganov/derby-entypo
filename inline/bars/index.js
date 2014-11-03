module.exports = EntypoBars;
function EntypoBars(){}
EntypoBars.prototype.view = __dirname;
EntypoBars.prototype.init = function(model) {
	model.setNull("size", 20);
}