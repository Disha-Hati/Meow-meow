var btnTranslate=document.querySelector("#btn-translate"); //gets the first element in the document with id="#..."
var tarea1=document.querySelector("#input-area");
var tarea2=document.querySelector("#output-area");

var serverURL="https://api.funtranslations.com/translate/jive.json"; //API url


//defining getTranslationURL function
function getTranslationURL(input){
    return serverURL+"?"+"text="+input;
}

//definning errorHandler
function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wronggg!!!");
}

// defining clickHandler function
function clickHandler(){ 
    var input=tarea1.value; //value property sets or returns the value of the value attribute of a text field

    //calling server for processing
    fetch(getTranslationURL(input))
        .then(response=>response.json())
        .then(json=>{
            var translatedText=json.contents.translated;
            tarea2.innerText=translatedText;
        })
        .catch(errorHandler)  // catch statement lets you handle the error.
};

btnTranslate.addEventListener("click",clickHandler); //document.addEventListener(event, function, useCapture(opt))