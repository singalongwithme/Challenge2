(function () {
    'use strict';

    angular
        .module('supplyhub', [
            /* bower dependences */
            'ui.router',
            'ngTable',
            'ngMaterial',

            /* app modules */
            'supplyhub.header',
            'supplyhub.products'
        ]);
})();