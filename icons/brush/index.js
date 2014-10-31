module.exports = EntypoBrush;
function EntypoBrush(){}
EntypoBrush.prototype.view = __dirname;
EntypoBrush.prototype.init = function(model) {
	model.setNull("size", 20);
}