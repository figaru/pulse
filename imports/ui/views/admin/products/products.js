import './products.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import { Products } from '../../../../api/products/products.js';

Template.view_admin_products.onCreated(function adminProductsCreate(){
	const handle = Meteor.subscribe('Products');
	
	Tracker.autorun(() => {
	  const isReady = handle.ready();
	  console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);  
	});
});

Template.view_admin_products.helpers({
  products() {
    return Products.find({}).count();
  },
});

Template.view_admin_products.events({
	'submit .js-form-add'(event, instance){
		event.preventDefault();

		const target = event.target;

		let data;

		data = {
			name: target.name.value,
			description: target.description.value,
			charity: target.charity.value,
			stock: target.stock.value,
			price: target.price.value,
			gender: target.gender.value,
			image: target.image.value,
		};

		Meteor.call('products.add', data);

		return false;
	},
});