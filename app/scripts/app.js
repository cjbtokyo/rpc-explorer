'use strict';

/**
 * @ngdoc overview
 * @name rpcExplorerApp
 * @description
 * # rpcExplorerApp
 *
 * Main module of the application.
 */
angular
  .module('rpcExplorerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/chain/:chain', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/chain/:chain/block/:block', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/chain/:chain/tx/:txid', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsCtrl',
        controllerAs: 'stats'
      })
      .when('/chain/:chain/mempool', {
        templateUrl: 'views/mempool.html',
        controller: 'MempoolCtrl',
      })
      .when('/chain/:chain/mempool/tx/:txid', {
        templateUrl: 'views/mempool.html',
        controller: 'MempoolCtrl',
      })
      .when('/mempool', {
        templateUrl: 'views/mempool.html',
        controller: 'MempoolCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
