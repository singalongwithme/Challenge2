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
                url: 'products?search&page',
                templateUrl: 'app/templates/product-list.html',
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
                },
                resolve: {
                    data: function ($stateParams, $state, ApiFactory) {
                        if ($stateParams.search) {
                            return ApiFactory
                                .getProductsList($stateParams.search)
                                .success(function (products) {
                                    ApiFactory.productsList = products;
                                });
                        }
                    }
                }
            });
    }
})();
