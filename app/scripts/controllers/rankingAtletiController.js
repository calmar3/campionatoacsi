(function () {
    'use strict';
    var rankingAtletiCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', '$location', '$anchorScroll', 'loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams, $location, $anchorScroll, loadFactory) {
        var ctrl = this;
        ctrl.selectedTab = 0;
        ctrl.selectTab = selectTabFn;

        $scope.$watch(function () {
            return loadFactory.data;
        }, function (res) {
            if (Object.keys(loadFactory.classifiche).length === 0 && loadFactory.classifiche.constructor === Object) {

                loadFactory.setClassifiche($state.current.name, "categorie");

            }

            ctrl.campionato = loadFactory.getClassifiche();
            ctrl.dataAggiornamento = loadFactory.getDataAggiornamento();
            ctrl.classifiche = ctrl.campionato.clas;
            ctrl.nomeCampionato = ctrl.campionato.nome;

        });

        // ctrl.campionato = loadFactory.getClassifiche();
        ctrl.selezionaPiazzamenti = selezionaPiazzamentiFn;

        function selezionaPiazzamentiFn(index) {
            ctrl.piazzamenti = {};
            ctrl.piazzamenti.gare = ctrl.classifiche[ctrl.selectedTab].classifica[index].piazzamenti;
            ctrl.piazzamenti.atleta = ctrl.classifiche[ctrl.selectedTab].classifica[index].cognome + " " + ctrl.classifiche[ctrl.selectedTab].classifica[index].nome;
            $location.hash('dettaglio-piazzamenti');
            $anchorScroll.yOffset = 80;
            $anchorScroll();
        }

        function selectTabFn(tab) {
            ctrl.selectedTab = tab;
        }
    }];
    rankingAtletiCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', '$location', '$anchorScroll', 'loadFactory'];
    angular.module('campionatoAcsi').controller('rankingAtletiCtrl', rankingAtletiCtrl);
}());