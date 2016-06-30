/**
 * Created by Volodymyr on 30.06.2016.
 */
function SendForm() {
    var value = document.getElementById('city').value;
    console.log(value);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            document.getElementsByClassName("demo").innerHTML = obj.city.id;
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=/" + value, true);
    xhttp.send();
}


function ClearItems() {
    var description = document.getElementsByClassName("demo");
    description.remove();
}