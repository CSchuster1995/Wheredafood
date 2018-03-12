(function() { 
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas";
    var apiKey = "6f9b1a21262a8c6839703d2d96ef5196";
    var httpRequest;
    makeRequest();



    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&appid=' + apiKey);
        httpRequest.send();
    }

    function responseMethod() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                updatedUISuccess(httpRequest.responseText);
            }else {
                updatedUIError();
            }
        }
    }


    function updatedUISuccess(responseText) {

       
        
        var response = JSON.parse(httpRequest.responseText);
        var condition = response.main.temp;
        var degC = response.main.temp - 273.15;
        var degCInt = Math.floor(degC);
        var degF = degC * 1.8 + 32;
        var degFInt = Math.floor(degF);
        var weatherbox = document.getElementById("weather");
        weatherbox.innerHTML = "<p>" + degCInt + "&#176; C /" + degFInt + "&#176; F /</p><p>" + condition + "</p>";
        //weatherbox.innerHTML = degCInt + " " + degFInt + " "+ condition;
    }
})();