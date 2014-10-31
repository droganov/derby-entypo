module.exports = EntypoDot;
function EntypoDot(){}
EntypoDot.prototype.view = __dirname;
EntypoDot.prototype.init = function(model) {
	model.setNull("size", 20);
}