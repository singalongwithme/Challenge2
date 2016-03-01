(function () {
    'use strict';

    angular
        .module('supplyhub')
        .factory('ApiFactory', ApiFactory);

    ApiFactory.$inject = ['$http'];

    function ApiFactory ($http) {
        var api = 'http://api.vip.supplyhub.com:19000/products?search=';
        var service = {
            getProductList: getProductList
        };

        return service;

        function getProductList (query) {
            $http
                .get(api + query);
        }
    }
})();