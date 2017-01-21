(function () {
  'use strict';

  var rankingAtletiCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    ctrl.classifiche = loadFactory.getClassifiche();

    console.log(ctrl.classifiche);

    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

  }];

  rankingAtletiCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('rankingAtletiCtrl', rankingAtletiCtrl);

} ());