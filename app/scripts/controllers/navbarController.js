(function () {
  'use strict';

  var NavbarCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', function ($scope, $rootScope, $compile, $state, $stateParams) {

    var ctrl = this;

    ctrl.changeState = changeStateFn;

    function changeStateFn(newstate,param) {
      if (param === null)
        $state.go(newstate);
      else
        $state.go(newstate,{clt:param});

    }

  }];

  NavbarCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams'];

  angular.module('campionatoAcsi').controller('NavbarCtrl', NavbarCtrl);

} ());