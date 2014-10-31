module.exports = EntypoPinterest;
function EntypoPinterest(){}
EntypoPinterest.prototype.view = __dirname;
EntypoPinterest.prototype.init = function(model) {
	model.setNull("size", 20);
}