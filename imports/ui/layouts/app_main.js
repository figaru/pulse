import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './app_main.html';
import './app_main.css';
import '../modular/header/header.js';

Template.App_main.onCreated(function app_mainCreate(){
	const handle = Meteor.subscribe('tasks');
	
	Tracker.autorun(() => {
	  const isReady = handle.ready();
	  console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);  
	});
});