import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/views/shop/shop.js';
import '../../ui/layouts/app_main.js';

var authRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'authentication',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

// handling /admin route
authRoutes.route('/login', {
  action: function(params, queryParams) {
    BlazeLayout.render('App_main', {content: 'shop_home'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /shop trigger');
    if(Meteor.user()){
      console.log("allow user");
    }else{
      console.log("not allowed -> redirecting");
    }
  }]
});

// handling /admin/posts
authRoutes.route('/register', {
  action: function(params, queryParams) {
    BlazeLayout.render('App_main', {content: 'shop_view'});
  }
});