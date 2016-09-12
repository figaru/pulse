import './view.html';
import './view.css';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Products } from '../../../../api/products/products.js';

Template.shop_view.onCreated(function shopViewCreate(){
	const handle = Meteor.subscribe('Products');
	
	Tracker.autorun(() => {
	  const isReady = handle.ready();
	  console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);  
	});
});

Template.shop_view.helpers({
  product() {
    return Products.findOne({_id: FlowRouter.getParam("id")});
  },
});


Template.shop_view.events({
	'click .js-thumbail, click .js-view, click .details'(event, instance){
		FlowRouter.go("/shop/products/" + this._id);
	}
});