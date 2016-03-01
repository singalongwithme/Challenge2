(function () {
    'use strict';

    angular
        .module('supplyhub.header', [])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/templates/header.html',
                controller: 'HeaderController',
                controllerAs: 'vm'
            });
    }
})();