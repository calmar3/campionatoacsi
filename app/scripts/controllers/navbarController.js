(function () {
  'use strict';

  var NavbarCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams, loadFactory) {

    var ctrl = this;

    /** metodi e attributi accessibili dalla view */
    ctrl.changeState = changeStateFn;
    ctrl.init = initFn;

    /**funzione chiamata da ng-init dell'index.html
     * esegue il metodo con l'API per il file JSON
     */
    function initFn() {
      loadFactory.load();
    }

    /**funzione chiamata dai button sulla navbar per settare opportunamente il nuovo stato  e le classifiche della factory*/
    function changeStateFn(newstate, param) {

      if (newstate === 'home') {
        $state.go(newstate);
      }
      else {
        loadFactory.setClassifiche(newstate,param);
        if (param === 'societa')
          newstate = newstate + 'team';
        $state.go(newstate);
      }
    }


  }];

  NavbarCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory'];

  angular.module('campionatoAcsi').controller('NavbarCtrl', NavbarCtrl);

} ());