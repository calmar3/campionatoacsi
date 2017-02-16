(function() {
    'use strict';
    var rankingTeamCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory', function($scope, $rootScope, $compile, $state, $stateParams, loadFactory) {
        var ctrl = this;
        $scope.$watch(function() {
            return loadFactory.data;
        }, function(res) {
            if (Object.keys(loadFactory.classifiche).length === 0 && loadFactory.classifiche.constructor === Object) {
                var newstate = $state.current.name;
                newstate = newstate.replace('team','');
                    ctrl.campionato = loadFactory.getClassifiche();
                loadFactory.setClassifiche(newstate, "societa");
            }
            ctrl.campionato = loadFactory.getClassifiche();
            ctrl.dataAggiornamento = loadFactory.getDataAggiornamento();
            ctrl.fine_campionato = loadFactory.getFineCampionato();
            ctrl.classificaTeam = ctrl.campionato.clas;
            ctrl.nomeCampionato = ctrl.campionato.nome;
        });
        // ctrl.campionato = loadFactory.getClassifiche();
    }];
    rankingTeamCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory'];
    angular.module('campionatoAcsi').controller('rankingTeamCtrl', rankingTeamCtrl);
}());