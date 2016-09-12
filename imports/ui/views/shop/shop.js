import './shop.html';
import './shop.css';

import './view/view.js';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Products } from '../../../api/products/products.js';

Template.shop_home.onCreated(function shopCreate(){
	const handle = Meteor.subscribe('Products');
	
	Tracker.autorun(() => {
	  const isReady = handle.ready();
	  console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);  
	});
});

Template.shop_home.helpers({
  products() {
    return Products.find({}).fetch();
  },
});


Template.shop_home.events({
	'click .js-thumbail, click .js-view, click .details'(event, instance){
		FlowRouter.go("/shop/products/" + this._id);
	}
});