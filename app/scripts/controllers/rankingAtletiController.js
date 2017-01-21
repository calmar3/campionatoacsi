(function () {
  'use strict';

  var rankingAtletiCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    ctrl.campionato = loadFactory.getClassifiche();
    ctrl.classifiche = ctrl.campionato.clas;

    ctrl.nomeCampionato = ctrl.campionato.nome;

    // console.log(ctrl.classifiche);
    // console.log($state);

    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

  }];

  rankingAtletiCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('rankingAtletiCtrl', rankingAtletiCtrl);

} ());