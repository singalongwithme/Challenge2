(function () {
    'use strict';

    angular
        .module('supplyhub.products')
        .controller('ProductListController', ProductListController);

    ProductListController.$inject = ['$stateParams', '$state', 'ApiFactory', 'NgTableParams'];

    function ProductListController ($stateParams, $state, ApiFactory, NgTableParams) {
        var vm = this;

        vm.found = false;
        vm.loaded = false;
        vm.loadText = 'Getting results...';
        vm.productsList = ApiFactory.productsList;
        vm.query = $stateParams.search;
        vm.tableParams = tableParams();

        function tableParams () {
            var initialParams = {
                page: $stateParams.page,
                count: 15
            };

            var initialSettings = {
                getData: function ($defer, params) {
                    if (vm.productsList.length === 1) {
                        vm.loadText = 'No results found for \"' + vm.query + '\"';
                    } else {
                        vm.productsList = vm.productsList.filter(function (item) {
                            return item.product.photo;
                        });

                        vm.loaded = true;
                        vm.found = true;

                        params.total(vm.productsList.length);
                        $defer.resolve(vm.productsList.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        $state.go('main.products', {page: params.page()}, {notify: false});
                    }
                },
                dataset: vm.productsList,
                counts: []
            };

            return new NgTableParams(initialParams, initialSettings);
        }
    }
})();
