/*jslint browser: true*/
/*global console*/

var myapp = myapp || {};
myapp.pages = myapp.pages || {};

myapp.pages.IndexPageController = function (myapp, $$) {
  'use strict';
  
  // Init method
  (function () {
    var options = {
      'bgcolor': '#000',
      'fontcolor': '#fff', 
      // parallax: true|false, 
      // parallaxBackgroundImage: 'http://lorempixel.com/900/600/nightlife/2/', // parallax default background image
      // parallaxBackground: '-23%', // parallax default background effect
      /* parallaxSlideElements: {
            title: -100, 
            subtitle: -300, 
            text: -500
        }, */
      'onOpened': function () {
        console.log("welcome screen opened");
      },
      'onClosed': function () {
        console.log("welcome screen closed");
      }
    },
    welcomescreen_slides = [
      {
        id: 'slide0', 
        title: 'سلام', 
        picture: '<div class="tutorialicon">♥</div>',
        text: 'به اپلیکیشن ای میهن خوش آمدید،صفحه را به سمت چپ بکشید'
      },
      {
        id: 'slide1',
        title: 'آموزش', 
        picture: '<div class="tutorialicon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></div>',
        text: 'در بخش آموزش از آخرین آموزشهای رایگان باخبر می شوید'
      },
      {
        id: 'slide2',
        title: 'محصولات', 
        picture: '<div class="tutorialicon"><i class="fa fa-cart-plus" aria-hidden="true"></i></div>',
        text: 'در بخش محصولات آموزشهای تخصصی و باارزش را مشاهده می کنید.'
      },
      {
        id: 'slide3',
        // title: 'NO TITLE', 
        picture: '<div class="tutorialicon">☆</div>',
        text: 'ممنون از وقتی که صرف کردید.ای میهن آماده ارائه خدمت است<br><a class="tutorial-close-btn" href="#">بستن</a>'
      }
    ],
    welcomescreen = myapp.welcomescreen(welcomescreen_slides, options);
    
    $$(document).on('click', '.tutorial-close-btn', function () {
      welcomescreen.close();
    });

    $$('.tutorial-open-btn').click(function () {
      welcomescreen.open();  
    });
    
    $$(document).on('click', '.tutorial-next-link', function (e) {
      welcomescreen.next(); 
    });
    
    $$(document).on('click', '.tutorial-previous-slide', function (e) {
      welcomescreen.previous(); 
    });
  
  }());

};