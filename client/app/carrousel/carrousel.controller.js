'use strict';

(function(){

class CarrouselComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bootstrapApp')
  .component('carrousel', {
    templateUrl: 'app/carrousel/carrousel.html',
    controller: CarrouselComponent,
    controllerAs: 'carrouselCtrl'
  });

})();
