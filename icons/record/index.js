module.exports = EntypoRecord;
function EntypoRecord(){}
EntypoRecord.prototype.view = __dirname;
EntypoRecord.prototype.init = function(model) {
	model.setNull("size", 20);
}