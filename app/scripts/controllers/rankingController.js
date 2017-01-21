(function () {
  'use strict';

  var rankingCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    console.log($stateParams.clt);

    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

    ctrl.classifiche = loadFactory.getClassifiche();

  }];

  rankingCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('rankingCtrl', rankingCtrl);

} ());