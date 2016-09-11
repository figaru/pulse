import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app_main.js';
import '../../ui/views/home/home.js';
import '../../ui/views/shop/shop.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_main', { content: 'app_home' });
  },
});

FlowRouter.route('/shop', {
  name: 'App.shop',
  action() {
    BlazeLayout.render('App_main', { content: 'app_shop' });
  },
});