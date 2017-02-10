(function(){
    'use strict';
    angular.module('app', [
        'ui.router',
        'component.home'
    ]).config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
    });
})();