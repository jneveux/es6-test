import angular from 'angular';
import ngAnimate from 'angular-animate'
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import material from 'angular-material';
import message from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import 'normalize.css';
import smoothScroll from '../directives/smoothScroll';
import blockUI from 'angular-block-ui';

angular.module('app', [
    uiRouter,
    ngAnimate,
    Common.name,
    Components.name,
    ngSanitize,
    material,
    blockUI,
    'smoothScroll'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
