module.exports = EntypoPictures;
function EntypoPictures(){}
EntypoPictures.prototype.view = __dirname;
EntypoPictures.prototype.init = function(model) {
	model.setNull("size", 20);
}