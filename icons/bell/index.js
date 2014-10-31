module.exports = EntypoBell;
function EntypoBell(){}
EntypoBell.prototype.view = __dirname;
EntypoBell.prototype.init = function(model) {
	model.setNull("size", 20);
}