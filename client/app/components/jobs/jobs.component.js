import template from './jobs.html';
import controller from './jobs.controller';
import './jobs.less';

let jobsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default jobsComponent;
