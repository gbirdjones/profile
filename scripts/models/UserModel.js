var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer',
		password: 'bob'
	}
});