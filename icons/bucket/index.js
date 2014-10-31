module.exports = EntypoBucket;
function EntypoBucket(){}
EntypoBucket.prototype.view = __dirname;
EntypoBucket.prototype.init = function(model) {
	model.setNull("size", 20);
}