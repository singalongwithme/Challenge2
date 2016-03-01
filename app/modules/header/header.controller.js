(function () {
    'use strict';

    angular
        .module('supplyhub.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state','ApiFactory'];

    function HeaderController ($state, ApiFactory) {
        var vm = this;

        vm.getProductsList = getProductsList;

        function getProductsList (query) {
            ApiFactory
                .getProductsList(query)
                .success(function (products) {
                    ApiFactory.productsList = products;

                    $state.go('main.products', {search: query});
                })
        }
    }
})();