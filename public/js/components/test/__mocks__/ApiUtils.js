var ApiUtils = {
	data : [],
	setData : function(newData) {
		this.data = newData;
	},

	getData : function() {
		return this.data;
	}
};

module.exports = ApiUtils;