(function () {
    'use strict';
    var rankingAtletiCtrl = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', '$location', '$anchorScroll', 'loadFactory', function ($scope, $rootScope, $compile, $state, $stateParams, $location, $anchorScroll, loadFactory) {
        var ctrl = this;
        
        /**attributi e metodi accessibili dalla view */
        ctrl.selectedTab = 0;
        ctrl.selectTab = selectTabFn;
        ctrl.selezionaPiazzamenti = selezionaPiazzamentiFn;
        ctrl.tooltipText = tooltipTextFn;

        function tooltipTextFn(piazzamento) {
            if (piazzamento.is_migliore === false)
                return "Prova Scartata";
            if (piazzamento.is_maggiorato === true)
                return "Punteggio Maggiorato";
        }

        /** watch per attendere che loadFactory.data sia caricata dal valore di ritorno dell'API.*/
        $scope.$watch(function () {
            return loadFactory.data;
        }, function (res) {
            /** verifica che l'oggetto classifiche della loadFactory sia non vuoto */
            if (Object.keys(loadFactory.classifiche).length === 0 && loadFactory.classifiche.constructor === Object) {

                loadFactory.setClassifiche($state.current.name, "categorie");

            }
            /**prendo dati necessari alla view */
            ctrl.campionato = loadFactory.getClassifiche();
            ctrl.dataAggiornamento = loadFactory.getDataAggiornamento();
            ctrl.classifiche = ctrl.campionato.clas;
            ctrl.nomeCampionato = ctrl.campionato.nome;

        });



        /**funzione per prendere i piazzamenti dell'atleta selezionato in classifica */
        function selezionaPiazzamentiFn(index) {
            ctrl.piazzamenti = {};
            ctrl.piazzamenti.gare = ctrl.classifiche[ctrl.selectedTab].classifica[index].piazzamenti;
            ctrl.piazzamenti.atleta = ctrl.classifiche[ctrl.selectedTab].classifica[index].cognome + " " + ctrl.classifiche[ctrl.selectedTab].classifica[index].nome;
            $location.hash('dettaglio-piazzamenti');
            $anchorScroll.yOffset = 80;
            $anchorScroll();
        }

        /**selezione del tab per le categorie */
        function selectTabFn(tab) {
            ctrl.selectedTab = tab;
        }
    }];
    rankingAtletiCtrl.$inject = ['$scope', '$rootScope', '$compile', '$state', '$stateParams', '$location', '$anchorScroll', 'loadFactory'];
    angular.module('campionatoAcsi').controller('rankingAtletiCtrl', rankingAtletiCtrl);
}());