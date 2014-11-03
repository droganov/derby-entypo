module.exports = EntypoBolt;
function EntypoBolt(){}
EntypoBolt.prototype.view = __dirname;
EntypoBolt.prototype.init = function(model) {
	model.setNull("size", 20);
}