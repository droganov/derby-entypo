module.exports = EntypoDribbble;
function EntypoDribbble(){}
EntypoDribbble.prototype.view = __dirname;
EntypoDribbble.prototype.init = function(model) {
	model.setNull("size", 20);
}