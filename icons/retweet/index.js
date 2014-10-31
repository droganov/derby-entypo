module.exports = EntypoRetweet;
function EntypoRetweet(){}
EntypoRetweet.prototype.view = __dirname;
EntypoRetweet.prototype.init = function(model) {
	model.setNull("size", 20);
}