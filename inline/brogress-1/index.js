module.exports = EntypoBrogress1;
function EntypoBrogress1(){}
EntypoBrogress1.prototype.view = __dirname;
EntypoBrogress1.prototype.init = function(model) {
	model.setNull("size", 20);
}