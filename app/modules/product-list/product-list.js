(function () {
    'use strict';

    angular
        .module('supplyhub.products', [])
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main.products', {
                url: '/products?search&page',
                templateUrl: 'templates/product-list.html',
                controller: 'ProductListController',
                controllerAs: 'vm',
                params: {
                    search: {
                        value: '',
                        squash: true
                    },
                    page: {
                        value: '1',
                        squash: true
                    }
                }
            });
    }
})();