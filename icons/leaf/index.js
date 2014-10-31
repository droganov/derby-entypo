module.exports = EntypoLeaf;
function EntypoLeaf(){}
EntypoLeaf.prototype.view = __dirname;
EntypoLeaf.prototype.init = function(model) {
	model.setNull("size", 20);
}