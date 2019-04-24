var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
		connection.query("SELECT * FROM burgers", function(err, result)
		{
			if (err) throw err;
			callback(result);
		});
	},

};

module.exports = orm