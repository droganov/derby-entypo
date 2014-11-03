module.exports = EntypoBag;
function EntypoBag(){}
EntypoBag.prototype.view = __dirname;
EntypoBag.prototype.init = function(model) {
	model.setNull("size", 20);
}