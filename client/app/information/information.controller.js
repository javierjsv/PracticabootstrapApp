'use strict';

(function(){

class InformationComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bootstrapApp')
  .component('information', {
    templateUrl: 'app/information/information.html',
    controller: InformationComponent,
    controllerAs: 'informationCtrl'
  });

})();
