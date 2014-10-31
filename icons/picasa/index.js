module.exports = EntypoPicasa;
function EntypoPicasa(){}
EntypoPicasa.prototype.view = __dirname;
EntypoPicasa.prototype.init = function(model) {
	model.setNull("size", 20);
}