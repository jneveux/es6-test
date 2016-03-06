import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jobsComponent from './jobs.component';
import CatService from '../../services/cats/service'

let jobsModule = angular.module('jobs', [
  uiRouter,
  CatService.name
]).config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('jobs', {
      url: '/jobs',
      template: '<jobs></jobs>'
    });
})

.component('jobs', jobsComponent);

export default jobsModule;
