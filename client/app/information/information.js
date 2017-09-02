'use strict';

angular.module('bootstrapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('information', {
        url: '/information',
        template: '<information></information>'
      });
  });
