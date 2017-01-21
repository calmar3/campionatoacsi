(function () {
  'use strict';

  var rankingTeamCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

    ctrl.classifiche = loadFactory.getClassifiche();

  }];

  rankingTeamCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('rankingTeamCtrl', rankingTeamCtrl);

} ());