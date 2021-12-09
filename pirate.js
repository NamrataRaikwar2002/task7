var button_trans=document.querySelector("#button_translate")
var input=document.querySelector("#input_box")
var output=document.querySelector("#bottom")


var serverURL="https://api.funtranslations.com/translate/pirate.json"
function gettranslationurl(text){
    return serverURL + "?" + "text=" + text
}

function errorhandler(error){
    console.log("error occures",error)
    alert("something went wrong")
};

function clickHandler(){
    var inputText=input.value;

    fetch(gettranslationurl(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        output.innerText=translatedText;
    })
    .catch(errorhandler)
};

button_trans.addEventListener('click',clickHandler)