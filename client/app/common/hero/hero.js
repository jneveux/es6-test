import angular from 'angular';
import uiRouter from 'angular-ui-router';
import material from 'angular-material';
import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
  uiRouter
])

.component('hero', heroComponent);

export default heroModule;
