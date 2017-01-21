(function () {
  'use strict';

  var rankingAtletiCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams,loadFactory) {

    var ctrl = this;

    

    ctrl.selectedTab = 0;

    ctrl.selectTab = selectTabFn;

    ctrl.campionato = loadFactory.getClassifiche();

    console.log(ctrl.campionato);
    
    ctrl.classifiche = ctrl.campionato.clas;

    ctrl.nomeCampionato = ctrl.campionato.nome;

    ctrl.selezionaPiazzamenti = selezionaPiazzamentiFn;

    function selezionaPiazzamentiFn(index){

      ctrl.piazzamenti = {};
      ctrl.piazzamenti.gare = ctrl.classifiche[ctrl.selectedTab].classifica[index].piazzamenti;
      ctrl.piazzamenti.atleta = ctrl.classifiche[ctrl.selectedTab].classifica[index].cognome + " " + ctrl.classifiche[ctrl.selectedTab].classifica[index].nome;

    }
    function selectTabFn(tab) {

      ctrl.selectedTab = tab;

    }

  }];

  rankingAtletiCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams','loadFactory'];

  angular.module('campionatoAcsi').controller('rankingAtletiCtrl', rankingAtletiCtrl);

} ());