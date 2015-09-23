var Backbone = require('backbone');
var UserModel = require('./models/UserModel');
var $ = require('jquery');
window.jQuery = $;
var bootstrap = require('bootstrap');
var $nameUI = $('.profile-usertitle-name');
var $roleUI = $('.profile-usertitle-job');
var $nameDropUI = $('.dropdown-toggle');

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

$('#submitProfile').on('submit', function(e) {
	console.log(user)
	e.preventDefault();
	user.set('name', $('#name').val());
	user.set('email', $('#inputEmail3').val());
	user.set('role', $('#role').val());
	user.set('password', $('#inputPassword3').val());
	console.log(user)
	$nameUI.html = $('#name').val();
	$roleUI.html = $('#role').val();
	$nameDropUI.html = $('#name').val();

});

var app = new App();
Backbone.history.start();