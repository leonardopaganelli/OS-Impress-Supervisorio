(function () {
    'use strict';

    angular
        .module('app')
        .constant('APP_CONFIG', {
            ATIVOS: [
                {
                    nome: 'Servidor 1',
                    arquivo: './assets/servidores/servidor1.txt',
                    detalhe: 'Monitoramento + NIS',
                    classe: "srv1",
                    ativo: false,
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
                    classe: "srv2",
                    ativo: false,
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
                    classe: "srv3",
                    ativo: false,
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
                    classe: "cliente",
                    ativo: false,
                    imagem:{
                        icone: './assets/img/dash.png',
                        n1: './assets/img/transparente.png',
                        n2: './assets/img/transparente.png',
                        n3: './assets/img/computador.png'
                    },
                    ssh: ""
                }
            ]

        })
})();