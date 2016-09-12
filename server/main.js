import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/api/products/products.js';

Meteor.startup(() => {
  // code to run on server at startup

  console.log(Products.find().count());
});
