(function() {
  'use strict';

  var MainCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', function($scope, $rootScope, $compile, $state, $stateParams) {

    var ctrl = this;

    ctrl.changeState = changeStateFn;

    function changeStateFn(){
      $state.go('about');
    }


  }];

  MainCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams'];

  angular.module('campionatoAcsi').controller('MainCtrl', MainCtrl);

}());