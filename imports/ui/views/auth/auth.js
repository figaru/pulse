import './auth.html'

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Auth.events({
  'submit .js-login-form'(event, instance) {
    // increment the counter when button is clicked
    event.preventDefault();
    console.log($("#login-user").val());

    return false;
  },
  'submit .js-register-form'(event, instance){
	event.preventDefault();
  	
  	let user, 
  		pass;

  	user = $("#register-user").val();
  	pass = $("#register-pass").val();

  	

  	return false;
  }
});