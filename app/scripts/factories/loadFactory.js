(function() {
    'use strict';
    angular.module('campionatoAcsi').factory('loadFactory', loadFactory);

    function loadFactory($http) {
        var dataFactory = {};
        dataFactory.data = { calendario:[] , classifiche:[]};
        dataFactory.load = loadFn;
        dataFactory.getCalendario = getCalendarioFn;
        dataFactory.getClassifiche = getClassificheFn;
        dataFactory.getDataAggiornamento = getDataAggiornamentoFn;
        dataFactory.classifiche = {};
        dataFactory.setClassifiche = setClassificheFn;

        function loadFn() {
            $http.get('https://dl.dropboxusercontent.com/u/9647434/source.json').then(function(response) {
              // console.log(data);
              dataFactory.data = response.data;
              console.log(dataFactory.data)
            }).catch(function(data) {
              console.log(data);
              // show error popup
              });
        }
        function getCalendarioFn() {
            return dataFactory.data.calendario;
        }

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