import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/admin.js';
import '../../ui/views/admin/admin.js';

import '../../ui/views/admin/products/products.js'

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

// handling /admin route
adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('layout_admin', {content: 'view_admin'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /admin trigger');
    if(Meteor.user()){
      console.log("allow user");
    }else{
      console.log("not allowed -> redirecting");
      console.log(context);
      console.log(redirect);
    }
  }]
});

// handling /admin/posts
adminRoutes.route('/products', {
  action: function() {
    BlazeLayout.render('layout_admin', {content: 'view_admin_products'});
  }
});