(function () {
    'use strict';

    angular
        .module('app')
        .controller('monitoramentoController', MonitoramentoController);

    MonitoramentoController.$inject = [
        '$scope',
        '$interval',
        'monitoramentoService',
        'APP_CONFIG'
    ];

    function MonitoramentoController($scope, $interval, monitoramentoService, APP_CONFIG) {

        $scope.vm = { }
        $scope.fn = {
            lerArquivo: LerArquivo,
            trataRetornoArquivo: TrataRetornoArquivo
        }

        Init();

        function Init() {
            for (var i in $scope.computadores) {
                $scope.fn.lerArquivo(i);
            }
        };

        $scope.computadores = APP_CONFIG.ATIVOS;

        var segundos = 0.1;
        var delay = segundos * 1000;
        $interval(function(){
            for (var i in $scope.computadores) {
                $scope.fn.lerArquivo(i);
            }
        },delay);

        function LerArquivo(index){

            var filtroData = {
                url: $scope.computadores[index].arquivo
            };

            monitoramentoService
                .getConteudoArquivo(filtroData)
                .then(function(response){
                    if (response.status === 200) {
                        $scope.computadores[index].ativo = $scope.fn.trataRetornoArquivo(response.data);
                    } else {
                        console.log(response.status, response.statusText);
                    }
                }, function (responseError) {
                    console.log(responseError.status, responseError.statusText);
                });

        };

        function TrataRetornoArquivo(status) {
            switch(status){
                case "0":
                    return true;
                case "1":
                    return false;
                default:
                    console.log('Status nao reconhecido')
                    return false;
            }
        }
    }
})();
