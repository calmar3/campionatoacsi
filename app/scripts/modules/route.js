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
          templateUrl: "views/main.html",
          controller: 'MainCtrl',
          controllerAs: 'ctrl'
        }
      },
      params: {
        home: true
      }
    }).state('classifiche', {
      parent: 'site',
      url: '/classifiche?:clt',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/ranking.html",
          controller: 'rankingCtrl',
          controllerAs: 'ctrl'
        }
      }
    });

  }

} ());
