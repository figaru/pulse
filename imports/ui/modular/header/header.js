import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './header.html';
import './header.css';

//check if user logged in
//import '../../ui/pages/auth/auth.js'
Template.modular_header.onCreated(function appMainOnCreated() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    menuOpen: false,
  });
});

Template.modular_header.helpers({
  menuOpen(){
    const instance = Template.instance();
    return instance.state.get('menuOpen') && 'menu-open';
  },
});

Template.modular_header.events({
  'click .js-menu'(event, instance) {
    instance.state.set('menuOpen', !instance.state.get('menuOpen'));
  },
});

/*jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.header-wrapper').height();

        if(false){
            $(window).on('scroll', {
                    previousTop: 0
                },
                function() {
                    var currentTop = $(window).scrollTop();
                    //check if user is scrolling up
                    if (currentTop < this.previousTop) {
                        //if scrolling up...
                        if (currentTop > 0 && $('.header-wrapper').hasClass('fixed')) {
                            $('.header-wrapper').addClass('fixed');
                        } else {
                            $('.header-wrapper').removeClass('fixed');
                        }
                    } else {
                        //if scrolling down...
                        //$('.header-wrapper').removeClass('is-visible');
                        if (currentTop > headerHeight && !$('.header-wrapper').hasClass('fixed')) $('.header-wrapper').addClass('fixed');
                    }
                    this.previousTop = currentTop;
                });
            }
        }
});*/