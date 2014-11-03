module.exports = EntypoBriefcase;
function EntypoBriefcase(){}
EntypoBriefcase.prototype.view = __dirname;
EntypoBriefcase.prototype.init = function(model) {
	model.setNull("size", 20);
}