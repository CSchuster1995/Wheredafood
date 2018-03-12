(function() { 
    var url = "http://maps.googleapis.com/";
    var apiKey = "AIzaSyAjYpPpsOQYeTdlW_5CL09rBKHsXSbkrto";
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

    
})();