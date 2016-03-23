'use strict';

angular.module('kiwiSchoolApp.auth', [
  'kiwiSchoolApp.constants',
  'kiwiSchoolApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
