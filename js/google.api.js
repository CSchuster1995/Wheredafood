(function() { 
    var url = "https://www.google.com/maps/search/?api=1&query=McDonalds+seattle+wa;"
    var apiKey = "AIzaSyAjYpPpsOQYeTdlW_5CL09rBKHsXSbkrto";
    var httpRequest;
    makeRequest();



    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&key=' + apiKey);
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

    
})();