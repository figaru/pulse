import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Products = new Mongo.Collection('products');

if (Meteor.isServer) {

  // This code only runs on the server
  Meteor.publish('Products', function tasksPublication() {
    return Products.find();
  });

}

Meteor.methods({
  'products.add'(data) {
    /*check(text, String);
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }*/

    Products.insert({
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
      image: data.image,
      gender: data.gender,
      charity: data.charity,
      createdAt: new Date(),
      owner: this.userId,
      username: "",//Meteor.users.findOne(this.userId).username,
    });

  },
  'products.remove'(taskId) {
    check(taskId, String);

    Tasks.remove(taskId);
  },
  'products.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    Tasks.update(taskId, { $set: { checked: setChecked } });

  },
});
