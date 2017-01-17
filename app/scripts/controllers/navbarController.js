(function () {
  'use strict';

  var NavbarCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', function ($scope, $rootScope, $compile, $state, $stateParams) {

    var ctrl = this;

    console.log("NavbarCtrl");
  }];

  NavbarCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams'];

  angular.module('campionatoAcsi').controller('NavbarCtrl', NavbarCtrl);

} ());