var form = document.querySelector("form");
var div = document.querySelector("#tempResult");
form.addEventListener("submit", function(e) {
    //prevent form from automatic refresh on submit
    e.preventDefault();

    //get users submitted value
    var tempToConvert = form.elements["input"].value;
    console.log(tempToConvert);

    //check for celcius or faren
    if (form.elements["faren"].checked === true) {
        var convertedTemp = (tempToConvert - 32) * (5 / 9);
        div.innerText = convertedTemp;
        if (convertedTemp < 33) {
            div.style.backgroundColor = "Blue";
        } else {
            div.style.backgroundColor = "Red";
        }

    } else {
        var convertedTempcel = (tempToConvert * 1.8) + 32;
        div.innerText = convertedTempcel;
    }

    //var faren = form.elements["faren"].value;
    //console.log(faren);

    //var cel = form.elements["celcuis"].value;
    //console.log(cel);

    form.elements["clear"].addEventListener("click", function(e) {
        form.elements["input"].value = "";
    })

})