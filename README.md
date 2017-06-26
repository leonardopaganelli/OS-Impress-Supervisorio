# OS Impress Supervisorio
<h2>PT/BR</h2>
Sistema de Monitoramento apresentado como parte do trabalho de Laboratório de Desenvolvimento V, do curso de Redes de Computadores(Fatec Osasco).
O sistema web foi desenvolvido em Angular e seu servidor web é Node JS.

<h2><a name="pré-requisito"></a>Pré requisito</h2>
Possuir o node instalado no computador. Caso não tenha instalado, entrar no site https://nodejs.org/en/ realizar o download e os passos para a instalação.

<h2><a name="instalação-dependências"></a>Instalando dependências</h2>
O comando abaixo serve para instalar as dependências(express e angular) do arquivo package.json, ou seja instala os módulos de servidor web e angular.
<pre><code class="lang-js">
	npm install
</code></pre>

<h2><a name="subindo-servidor"></a>Subindo o servidor WEB</h2>
Após a instalação de depedências, vá com o terminal até a pasta do seu projeto e use o comando abaixo.
Caso seu computador/servidor seja windows usar este comando.
<pre><code class="lang-js">
	node server.js
</code></pre>

Caso seu computador/servidor seja linux usar este comando.
<pre><code class="lang-js">
	nodejs server.js
</code></pre>

Caso já tenha algum serviço utilizando a porta 8181, trocar o valor da variável porta no arquivo server.js.
<pre><code class="lang-js">
3. 		porta = 8181;
</code></pre>

<h2><a name="funcionalidade"></a>Funcionalidade</h2>
O sistema se baseia nos arquivos de extensão txt localizados em /assets/servidores, caso o valor do conteúdo seja 0, indica que o servidor esta ativo e o contrário para o valor 1.
Caso queira adicionar um novo servidor/computador adicionar um objeto dentro da variável computadores em ./app/monitoramento.controller.js

<h2><a name="template"></a>Template utilizado</h2>
O sistem teve como base o template de Jamie Coulter. Disponibilizado em: https://codepen.io/jcoulterdesign/pen/oXqZKZ

<h2>ENG</h2>
Monitoring system presented as part of college work of course Development Lab V, of course Network Computers(Fatec Osasco).
The web system was developed in Angular and webserver in Node JS.

<h2><a name="require"></a>Require</h2>
Node Js installed in computer. If dont, web on https://nodejs.org/en/, download it and follow steps to install.

<h2><a name="install-dependencies"></a>Installing dependencies</h2>
The code below install the dependencies(express, angular) of file package.json, in other words install modules of web server and angular.
<pre><code class="lang-js">
	npm install
</code></pre>

<h2><a name="starting-webserver"></a>Starting webserver</h2>
After installing the dependencies, with terminal, switch directory to your project directory and use the next command.

If SO of your computer/server is windows.
<pre><code class="lang-js">
	node server.js
</code></pre>

If SO of your computer/server is linux.
<pre><code class="lang-js">
	nodejs server.js
</code></pre>

If already have a service that uses por 8181, change value of variable "porta" on file server.js.
<pre><code class="lang-js">
3. 		porta = 8181;
</code></pre>

<h2><a name="funcionality"></a>Funcionality</h2>
The system is based on files of extension txt, located in the directory /assets/servidores, if the value of file is 0, indicates that the server is active and the opposite to value 1.
If wanna add a new server/computer, add a new object into variable "computadores" on ./app/monitoramento.controller.js.7mento.controller.js

<h2><a name="template"></a>Template used</h2>
The system have as base the template of Jaime Coulter. Published on: https://codepen.io/jcoulterdesign/pen/oXqZKZ