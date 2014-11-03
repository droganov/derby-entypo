module.exports = EntypoPie;
function EntypoPie(){}
EntypoPie.prototype.view = __dirname;
EntypoPie.prototype.init = function(model) {
	model.setNull("size", 20);
}