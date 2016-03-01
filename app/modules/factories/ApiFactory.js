(function () {
    'use strict';

    angular
        .module('supplyhub')
        .factory('ApiFactory', ApiFactory);

    ApiFactory.$inject = ['$http'];

    function ApiFactory ($http) {
        var api = 'http://api.vip.supplyhub.com:19000/products?search=';
        var productsList;

        var service = {
            getProductsList: getProductsList,
            productsList: productsList
        };

        return service;

        function getProductsList (query) {
            return $http
                .get(api + query);
        }
    }
})();