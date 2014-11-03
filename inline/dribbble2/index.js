module.exports = EntypoDribbble2;
function EntypoDribbble2(){}
EntypoDribbble2.prototype.view = __dirname;
EntypoDribbble2.prototype.init = function(model) {
	model.setNull("size", 20);
}