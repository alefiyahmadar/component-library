var Inputtext = document.querySelector("#input")
var btnTrans = document.querySelector("#btn-trans")
var Outputtext = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructURL(text)   {
    return serverURL + "?" +"text=" + text
}

function eventHandler() {

    var inputTXT = Inputtext.value

    fetch(constructURL(inputTXT))
    .then(response => response.json())
    .then(json => console.log(json))
}


var btnTrans =addEventListener("click" , eventHandler)
