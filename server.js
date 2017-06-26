var express = require("express"),
    app = express(),
    porta = 8181;

app.use(express.static('./'));
app.listen(porta,function(){
    console.log("Funcionando na porta "+porta+" !");
});  