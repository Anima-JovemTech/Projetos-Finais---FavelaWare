var express = require('express');
var app = express();
import axios from "axios"

app.use(express.static(__dirname + '/public'));

app.get('/home', function(req,res) {
    res.sendFile(__dirname + '/public/html/home.html');
});

app.get('/candidato', function(req,res) {
  res.sendFile(__dirname + '/public/html/candidato.html');
});

app.get('/empresa', function(req,res) {
  res.sendFile(__dirname + '/public/html/empresa.html');
});

app.get('/entrar', function(req,res) {
  res.sendFile(__dirname + '/public/html/entrar.html');
});

app.get('/mediasalarial', function(req,res) {
  res.sendFile(__dirname + '/public/html/mediasalarial.html');
});

app.listen(9090, function(){
    console.log("servidor esta rodando na porta http://localhost:9090")
});
import axios from "axios"

(async () => {
  let endpoint = "https://forgeware.withub.ai/api/bot/crawler/64282273869a3f26010c9238"
  const results = await axios.post(endpoint,
    {inputData: {"cargo":""}},
    {
      headers: {
      "x-api-key": "91d192e2-ebe7-49a4-bfa2-29595b50971d",
      "Content-Type": "application/json"
      }
    }
  )
})()