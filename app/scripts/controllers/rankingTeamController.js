(function() {
    'use strict';
    var rankingTeamCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory', function($scope, $rootScope, $compile, $state, $stateParams, loadFactory) {
        
        var ctrl = this;
        
        /** watch per attendere che loadFactory.data sia caricata dal valore di ritorno dell'API.*/
        $scope.$watch(function() {
            return loadFactory.data;
        }, function(res) {
            /** verifica che l'oggetto classifiche della loadFactory sia non vuoto */
            if (Object.keys(loadFactory.classifiche).length === 0 && loadFactory.classifiche.constructor === Object) {
                var newstate = $state.current.name;
                newstate = newstate.replace('team','');
                    ctrl.campionato = loadFactory.getClassifiche();
                loadFactory.setClassifiche(newstate, "societa");
            }
            /**prendo dati necessari alla view */
            ctrl.campionato = loadFactory.getClassifiche();
            ctrl.dataAggiornamento = loadFactory.getDataAggiornamento();
            ctrl.fine_campionato = loadFactory.getFineCampionato();
            ctrl.classificaTeam = ctrl.campionato.clas;
            ctrl.nomeCampionato = ctrl.campionato.nome;
        });

    }];

    rankingTeamCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', 'loadFactory'];
    angular.module('campionatoAcsi').controller('rankingTeamCtrl', rankingTeamCtrl);
}());