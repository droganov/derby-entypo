module.exports = EntypoExport;
function EntypoExport(){}
EntypoExport.prototype.view = __dirname;
EntypoExport.prototype.init = function(model) {
	model.setNull("size", 20);
}