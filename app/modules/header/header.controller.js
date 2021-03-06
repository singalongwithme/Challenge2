(function () {
    'use strict';

    angular
        .module('supplyhub.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state','ApiFactory'];

    function HeaderController ($state, ApiFactory) {
        var vm = this;

        vm.hasSearched = $state.params.search;

        vm.getProductsList = getProductsList;

        function getProductsList (query) {
            vm.hasSearched = true;

            ApiFactory
                .getProductsList(query)
                .then(function (products) {
                    ApiFactory.productsList = products;

                    $state.go('main.products', {search: query, page: 1});
                });
        }
    }
})();
