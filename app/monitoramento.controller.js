(function () {
    'use strict';

    angular
        .module('monitoramento')
        .controller('monitoramentoController', MonitoramentoController);

    MonitoramentoController.$inject = [
        '$scope',
        '$interval'
    ];

    function MonitoramentoController($scope, $interval) {

        $scope.computadores = [
            {
                nome: 'Servidor 1',
                arquivo: './assets/servidores/servidor1.txt',
                detalhe: 'Monitoramento + NIS',
                status: "0",
                classe: "srv1",
                estilo:{
                    frente: '',
                    borda: '',
                    mapa: ''
                },
                imagem:{
                    icone: './assets/img/dash.png',
                    n1: './assets/img/raspberry.png',
                    n2: './assets/img/debian.png',
                    n3: './assets/img/servidor.png'
                },
                ssh: "192.168.1.1"
            },
            {
                nome: 'Servidor 2',
                arquivo: './assets/servidores/servidor2.txt',
                detalhe: 'Gateway 1',
                status: "0",
                classe: "srv2",
                estilo:{
                    frente: '',
                    borda: '',
                    mapa: ''
                },
                imagem:{
                    icone: './assets/img/dash.png',
                    n1: './assets/img/ubuntu5.png',
                    n2: './assets/img/transparente.png',
                    n3: './assets/img/servidor.png'
                },
                ssh: "192.168.1.2"
            },
            {
                nome: 'Servidor 3',
                arquivo: './assets/servidores/servidor3.txt',
                detalhe: 'Gateway 2',
                status: "0",
                classe: "srv3",
                estilo:{
                    frente: '',
                    borda: '',
                    mapa: ''
                },
                imagem:{
                    icone: './assets/img/dash.png',
                    n1: './assets/img/ubuntu4.png',
                    n2: './assets/img/transparente.png',
                    n3: './assets/img/servidor.png'
                },
                ssh: "192.168.1.3"
            },
            {
                nome: 'Cliente',
                arquivo: './assets/servidores/cliente.txt',
                detalhe: 'Cliente Linux',
                status: "0",
                classe: "cliente",
                estilo:{
                    frente: '',
                    borda: '',
                    mapa: ''
                },
                imagem:{
                    icone: './assets/img/dash.png',
                    n1: './assets/img/transparente.png',
                    n2: './assets/img/transparente.png',
                    n3: './assets/img/computador.png'
                },
                ssh: ""
            }
        ];

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