
(function () {
    'use strict';

    angular
        .module('app')
        .service('monitoramentoService', MonitoramentoService);

    MonitoramentoService.$inject = [
        '$http',
        'APP_CONFIG'
    ];

    function MonitoramentoService($http, APP_CONFIG) {
        return {
            getConteudoArquivo: GetConteudoArquivo
        };

        function GetConteudoArquivo(filterData) {
            return $http({
                method: 'GET',
                url: filterData.url,
                params: { }
            });
        }
    }
})();