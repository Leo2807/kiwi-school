'use strict';

angular.module('kiwiSchoolApp', [
  'kiwiSchoolApp.auth',
  'kiwiSchoolApp.admin',
  'kiwiSchoolApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('light-green')
      .dark();
  });
