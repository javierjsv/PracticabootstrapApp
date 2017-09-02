'use strict';

(function(){

class CatalogoComponent {
  constructor() {
    this.message = 'Hello';
  }

    // window.alert("modal");
  $onInit() {
    if (!localStorage.respuestaModal) {
    $('#modalOferta').modal();
    }
  }

  noMostarModal() {
    localStorage.respuestaModal = true;
  }
}

angular.module('bootstrapApp')
  .component('catalogo', {
    templateUrl: 'app/catalogo/catalogo.html',
    controller: CatalogoComponent,
    controllerAs: 'vm'
  });

})();
