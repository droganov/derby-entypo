module.exports = EntypoPinterest2;
function EntypoPinterest2(){}
EntypoPinterest2.prototype.view = __dirname;
EntypoPinterest2.prototype.init = function(model) {
	model.setNull("size", 20);
}