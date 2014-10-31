module.exports = EntypoCup;
function EntypoCup(){}
EntypoCup.prototype.view = __dirname;
EntypoCup.prototype.init = function(model) {
	model.setNull("size", 20);
}