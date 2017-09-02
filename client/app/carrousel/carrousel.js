'use strict';

angular.module('bootstrapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('carrousel', {
        url: '/carrousel',
        template: '<carrousel></carrousel>'
      });
  });
