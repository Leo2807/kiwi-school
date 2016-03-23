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
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
