(function () {
    'use strict';

    angular
        .module('supplyhub', [
            /* bower dependences */
            'ui.router',
            'ngTable',
            'ngMaterial',
            'angular-loading-bar',

            /* app modules */
            'supplyhub.header',
            'supplyhub.products'
        ])
        .config(init);

    init.$inject = ['cfpLoadingBarProvider'];

    function init (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();