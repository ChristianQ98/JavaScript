function city() {
    return alert("Loading weather report...");
}

function acceptCookie() {
    document.getElementById("cookie").remove();
}

function convertToFahrenheit() {
    if(document.getElementById("temperature").value == "fahrenheit") {
        document.getElementsByClassName("temp1")[0].innerHTML = "75°";
        document.getElementsByClassName("temp2")[0].innerHTML = "65°";

        document.getElementsByClassName("temp1")[1].innerHTML = "80°";
        document.getElementsByClassName("temp2")[1].innerHTML = "66°";

        document.getElementsByClassName("temp1")[2].innerHTML = "69°";
        document.getElementsByClassName("temp2")[2].innerHTML = "61°";

        document.getElementsByClassName("temp1")[3].innerHTML = "78°";
        document.getElementsByClassName("temp2")[3].innerHTML = "70°";
    }
}

function convertToCelcius() {
    if(document.getElementById("temperature").value == "celcius") {
        document.getElementsByClassName("temp1")[0].innerHTML = "24°";
        document.getElementsByClassName("temp2")[0].innerHTML = "18°";

        document.getElementsByClassName("temp1")[1].innerHTML = "27°";
        document.getElementsByClassName("temp2")[1].innerHTML = "19°";

        document.getElementsByClassName("temp1")[2].innerHTML = "21°";
        document.getElementsByClassName("temp2")[2].innerHTML = "16°";

        document.getElementsByClassName("temp1")[3].innerHTML = "26°";
        document.getElementsByClassName("temp2")[3].innerHTML = "21°";
    }
}