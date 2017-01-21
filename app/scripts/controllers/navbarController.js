(function () {
  'use strict';

  var NavbarCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.changeState = changeStateFn;

    ctrl.init = initFn;

    function initFn(){
      console.log("initfn")
      loadFactory.load();
    }

    function changeStateFn(newstate,param) {
      if (param === null)
        $state.go(newstate);
      else
        $state.go(newstate,{clt:param});

    }


  }];

  NavbarCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('NavbarCtrl', NavbarCtrl);

} ());