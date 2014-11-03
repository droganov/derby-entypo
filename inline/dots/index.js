module.exports = EntypoDots;
function EntypoDots(){}
EntypoDots.prototype.view = __dirname;
EntypoDots.prototype.init = function(model) {
	model.setNull("size", 20);
}