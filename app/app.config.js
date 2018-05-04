(function () {
    'use strict';

    angular
        .module('app')
        .config(AppConfig);

    AppConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
    ];

    function AppConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/monitoramento');

        $stateProvider
            .state('monitoramento', {
                url: '/monitoramento',
                views: {
                    'monitoramento': {
                        templateUrl: 'app/components/monitoramento/monitoramento.view.html',
                        controller: 'monitoramentoController'
                    }
                },
                redirectTo: 'vendasHoje'
            });
    }

})();