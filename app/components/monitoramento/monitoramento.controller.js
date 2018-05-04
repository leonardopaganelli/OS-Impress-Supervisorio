(function () {
    'use strict';

    angular
        .module('app')
        .controller('monitoramentoController', MonitoramentoController);

    MonitoramentoController.$inject = [
        '$scope',
        '$interval',
        'APP_CONFIG'
    ];

    function MonitoramentoController($scope, $interval, APP_CONFIG) {

        Init();

        function Init() { };

        $scope.computadores = APP_CONFIG.ATIVOS;

        for (var i in $scope.computadores) {
            lerArquivo(i);
        }

        var segundos = 0.1;
        var delay = segundos * 1000;
        $interval(function(){
            for (var i in $scope.computadores) {
                lerArquivo(i);
            }

        },delay);

        function lerArquivo(index){

            var xhr = new XMLHttpRequest(),
                method = "GET",
                url = $scope.computadores[index].arquivo;
            xhr.open(method, url, true);

            xhr.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    if (index > -1)
                        // $scope.computadores[index].status = xhr.response;
                        if(xhr.response == 0){
                            $scope.computadores[index].status = "Ativo";
                            $scope.computadores[index].estilo.frente = "tile_true";
                            $scope.computadores[index].estilo.borda = "tile_border_true";
                            $scope.computadores[index].estilo.mapa = "map_true";
                            $scope.computadores[index].imagem.icone = "./assets/img/ativo.png";
                        }else if(xhr.response == 1){
                            $scope.computadores[index].estilo.frente = "tile_false";
                            $scope.computadores[index].status = "Inativo";
                            $scope.computadores[index].estilo.borda = "tile_border_false";
                            $scope.computadores[index].estilo.mapa = "map_false";
                            $scope.computadores[index].imagem.icone = "./assets/img/inativo.png";
                        } else {
                            alert("erro");
                        }
                }
            };
            xhr.send();
        };

    }

})();
