import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/views/shop/shop.js';
import '../../ui/layouts/app_main.js';

var shopRoutes = FlowRouter.group({
  prefix: '/shop',
  name: 'shop',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

// handling /admin route
shopRoutes.route('/', {
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
shopRoutes.route('/products/:id', {
  action: function(params, queryParams) {
    BlazeLayout.render('App_main', {content: 'shop_view'});
  }
});