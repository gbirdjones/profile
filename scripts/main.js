var Backbone = require('backbone');
var UserModel = require('./models/UserModel');
var $ = require('jquery');
window.jQuery = $;
var bootstrap = require('bootstrap');

var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();

	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
		$('#inputEmail3').val(user.get('email'));
		$('#role').val(user.get('role'));
		$('#inputPassword3').val(user.get('password'));
		$('#name').val(user.get('name'));
	}
});

// $.get (
// 	'http://tiyfe.herokuapp.com/collections/gbjprofile',
// 	function(show){
// 		$('#name').val(show.name);
// 		$('#inputEmail3').val(show.email);
// 		$('#role').val(show.role);
// 		$('.navbar-right .dropdown .dropdown-toggle ').text(show.name);
// 		$('.profile-usertitle-name').text(show.name);
// 		$('.profile-usertitle-job').text(show.role);
// 	},
// 	'json'

// );

$('#submitProfile').on('submit', function(e) {
	console.log(user)
	e.preventDefault();
	user.set('name', $('#name').val());
	user.set('email', $('#inputEmail3').val());
	user.set('role', $('#role').val());
	user.set('password', $('#inputPassword3').val());
	console.log(user)

	// $.ajax ({
	// 	url: 'http://tiyfe.herokuapp.com/collections/gbjprofile',
	// 	type: 'PUT',
	// 	succes: function ()
	// 	{
		
	// 	},
	// 	'json'
	// });

});
user.on('change', function() {
	$('.navbar-right .dropdown .dropdown-toggle ').text(user.get('name'));
	$('#profileName').text(user.get('name'));
	$('.profile-usertitle-job').text(user.get('role'));

});


var app = new App();
Backbone.history.start();