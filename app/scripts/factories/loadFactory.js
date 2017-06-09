(function() {
    'use strict';
    angular.module('campionatoAcsi').factory('loadFactory', loadFactory);

    function loadFactory($http) {
        var dataFactory = {};
        /**
         * proprietà e metodi accessibili dall'esterno
         */
        dataFactory.data = { calendario:[] , classifiche:[]};
        dataFactory.load = loadFn;
        dataFactory.getCalendario = getCalendarioFn;
        dataFactory.getClassifiche = getClassificheFn;
        dataFactory.getDataAggiornamento = getDataAggiornamentoFn;
        dataFactory.classifiche = {};
        dataFactory.setClassifiche = setClassificheFn;
        dataFactory.getFineCampionato = getFineCampionatoFn;

        /**
         * Chiamata al refresh dell'app ed all'avvio.
         * Carica il file Json nella proprietà dataFactory.data
         */
        function loadFn() {
            var urlDataSource = 'data/source.json';
            $http.get(urlDataSource,{
                cache: false
            }).then(function(response) {
              dataFactory.data = response.data;
              //console.log(dataFactory.data);
            }).catch(function(data) {
              console.log(data);
              // show error popup
              });
        }



        function getCalendarioFn() {
            return dataFactory.data.calendario;
        }


        function getFineCampionatoFn(){
            return dataFactory.data.fine_campionato;
        }


        /**
         * Campionato e tipo sono riferiti a granfondo/mediofondo - societa/atleti
         * quindi la proprietà classifiche della Factory viene impostata con la giusta classifica
         */
        function setClassificheFn(campionato, tipo) {
            for (var i = 0; i < dataFactory.data.classifiche.length; i++) {
                if (dataFactory.data.classifiche[i].campionato === campionato) {
                    dataFactory.classifiche.clas = dataFactory.data.classifiche[i][tipo];
                    dataFactory.classifiche.nome = dataFactory.data.classifiche[i].campionato;
                    break;
                }
            }
        }

        function getClassificheFn() {
            return dataFactory.classifiche;
        }

        function getDataAggiornamentoFn(){
            return dataFactory.data.ultimo_aggiornamento_dati;
        }

        return dataFactory;
    }

    loadFactory.$inject = ['$http'];

}());