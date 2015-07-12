var app = app || {};

app.Book = Backbone.Model.extend({
	defaults:{
		coverImage:'img/placeholder.png',
		title:'No tile',
		author:'Unknown',
		releaseDate:'Unknown',
		keywords:'None'
	},

	idAttribute: '_id'
});


