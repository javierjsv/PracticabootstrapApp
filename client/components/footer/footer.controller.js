'use strict';

class FooterComponent {
  constructor() {
  }

  conForm() {
    this.el;
    this.error = Math.random()> 0.5;
    if (this.error) {
      this.el = "<label class='control-label' for='inputSuccess2'>Registro Exitoso</label>";
      this.validaColor = "has-success";
      this.validaColorDiv = ["form-control-feedback","glyphicon","glyphicon-ok"];
    }
    else {
      this.el = "<label class='control-label' for='inputSuccess2'>Registro no</label>";
      this.validaColor = "has-error";
      this.validaColorDiv = ["form-control-feedback","glyphicon","glyphicon-remove"];
    }
    }
  }




angular.module('bootstrapApp')
  .component('footerApp', {
    templateUrl: 'components/footer/footer.html',
    controller: FooterComponent,
    controllerAs: 'vm'
  });
