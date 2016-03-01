(function () {
    'use strict';

    angular
        .module('supplyhub.header')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['ApiFactory'];

    function HeaderController (ApiFactory) {
        var vm = this;

        vm.getProductList = getProductList;

        function getProductList (query) {
            $state.go('main.products', {search: query});
        }
    }
})();