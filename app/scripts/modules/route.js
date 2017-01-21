(function () {

  'use strict';

  angular.module('campionatoAcsi').config(routingConf).run(runfunction);

  routingConf.$inject = ['$stateProvider', '$urlRouterProvider'];

  runfunction.$inject = ['$rootScope'];

  function runfunction($rootScope) {
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
    }).state('mediofondo', {
      parent: 'site',
      url: '/mediofondo',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/rankingAtleti.html",
          controller: 'rankingAtletiCtrl',
          controllerAs: 'ctrl'
        }
      }
    }).state('granfondo', {
      parent: 'site',
      url: '/granfondo',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/rankingAtleti.html",
          controller: 'rankingAtletiCtrl',
          controllerAs: 'ctrl'
        }
      }
    }).state('granfondoteam', {
      parent: 'site',
      url: '/granfondoteam',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/rankingTeam.html",
          controller: 'rankingTeamCtrl',
          controllerAs: 'ctrl'
        }
      }
    }).state('mediofondoteam', {
      parent: 'site',
      url: '/mediofondoteam',
      data: {
        roles: []
      },
      views: {
        'content@': {
          templateUrl: "views/rankingTeam.html",
          controller: 'rankingTeamCtrl',
          controllerAs: 'ctrl'
        }
      }
    });

  }

} ());
