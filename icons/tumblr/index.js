module.exports = EntypoTumblr;
function EntypoTumblr(){}
EntypoTumblr.prototype.view = __dirname;
EntypoTumblr.prototype.init = function(model) {
	model.setNull("size", 20);
}