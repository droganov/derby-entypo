module.exports = EntypoCone;
function EntypoCone(){}
EntypoCone.prototype.view = __dirname;
EntypoCone.prototype.init = function(model) {
	model.setNull("size", 20);
}