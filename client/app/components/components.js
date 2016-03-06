import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import jobs from './jobs/jobs'

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  jobs.name
]);

export default componentModule;
