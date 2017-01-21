(function () {

  'use strict';

  angular.module('campionatoAcsi').config(routingConf).run(runfunction);

  routingConf.$inject = ['$stateProvider', '$urlRouterProvider'];

  runfunction.$inject = ['$rootScope', '$state', '$stateParams'];

  function authorizationfunction(authorizationFact) {
    return authorizationFact.authorize();
  }

  function runfunction($rootScope, $state, $stateParams) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
      $rootScope.toState = toState;
      $rootScope.toStateParams = toStateParams;
    });
  }


  function routingConf($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('site', {
      'abstract': true
    }).state('home', {
      parent: 'site',
      url: '/',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/main2.html",
          controller: 'MainCtrl',
          controllerAs: 'ctrl'
        }
      },
      params: {
        home: true
      }
    }).state('about', {
      parent: 'site',
      url: '/about',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/about.html",
          controller: 'AboutCtrl',
          controllerAs: 'ctrl'
        }
      },
      params: {
        home: true
      }
    });

  }

} ());
