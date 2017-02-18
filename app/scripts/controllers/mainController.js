(function () {
  'use strict';

  var MainCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    /**empty main controller
     * le funzionalità aggiungibili andranno utilizzate nella view delle newsletter
     */
    
  }];

  MainCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('MainCtrl', MainCtrl);

} ());