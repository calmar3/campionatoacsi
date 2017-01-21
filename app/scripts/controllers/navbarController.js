(function () {
  'use strict';

  var NavbarCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams, loadFactory) {

    var ctrl = this;

    ctrl.changeState = changeStateFn;

    ctrl.init = initFn;


    function initFn() {
      loadFactory.load();
    }

    function changeStateFn(newstate, param) {

      if (newstate === 'home') {
        $state.go(newstate);
      }
      else {
        loadFactory.setClassifiche(newstate,param)
        $state.go(newstate);
      }


    }


  }];

  NavbarCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory'];

  angular.module('campionatoAcsi').controller('NavbarCtrl', NavbarCtrl);

} ());