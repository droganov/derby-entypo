module.exports = EntypoDanielbruce;
function EntypoDanielbruce(){}
EntypoDanielbruce.prototype.view = __dirname;
EntypoDanielbruce.prototype.init = function(model) {
	model.setNull("size", 20);
}