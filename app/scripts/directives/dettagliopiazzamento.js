'use strict';

/**
 * @ngdoc directive
 * @name campionatoacsi.directive:dettaglioPiazzamento
 * @description
 * # dettaglioPiazzamento
 */
angular.module('campionatoAcsi')
  .directive('dettaglioPiazzamento', function () {

  	var controllerFn = ['$scope', function ($scope) {

  		function tooltipTextFn(piazzamento) {
            if (piazzamento.is_migliore === false)
                return "Prova scartata";
            if (piazzamento.is_maggiorato === true)
                return "Punteggio maggiorato";
        }
        
        function tooltipEnablerFn(piazzamento) {
          	return piazzamento.is_migliore===false || piazzamento.is_maggiorato===true;
        }

        function cssClassFn(piazzamento) {
          	if(piazzamento.is_migliore === false) {
				return 'danger';
			}
          	if(piazzamento.is_maggiorato === true) {
				return 'warning';
			}
			return '';
        }

        function init() {
          	$scope.cssClass = cssClassFn($scope.pzz);
            $scope.ttText = tooltipTextFn($scope.pzz);
            $scope.ttEnabler = tooltipEnablerFn($scope.pzz);
        }

        init();

    }];

    return {
    	templateUrl: 'scripts/directives/dettagliopiazzamento.html',
    	replace: true,
    	restrict: 'A',
    	scope: {
	    	pzz: '=piazzamento',
	    },
		controller: controllerFn,
    };
  });
