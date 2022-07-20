var Inputtext = document.querySelector("#input")
var btnTrans = document.querySelector("#btn-trans")
var Outputtext = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURL(text)   {
    return serverURL + "?" +"text=" +text
}

function eventHandler() {

    var inputTXT = Inputtext.value

    fetch (constructURL(inputTXT))
    .then(response => response.json())
    .then(json => {

        var inputTEXT = json.contents.translated

        
        Outputtext.innerText = inputTEXT

    })
}


var btnTrans =addEventListener("click" , eventHandler)
