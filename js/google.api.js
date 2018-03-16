
// google search API
$(document).ready(function () {
    
    var map = document.getElementById('mapWindow');
    var loc = "houston";
    var type = "";

    var american = document.getElementById('american');
    var mexican = document.getElementById('mexican');
    var indian = document.getElementById('indian');
    var chinese = document.getElementById('chinese');
    var greek = document.getElementById('greek');
    var african = document.getElementById('african');
    var vegan = document.getElementById('vegan');
    var mongolian = document.getElementById('mongolian');
    var thai = document.getElementById('thai');
    var german = document.getElementById('german');
    var cuban = document.getElementById('cuban')
    var brazilian = document.getElementById('brazilian');
    var french = document.getElementById('french');
    var caribbean = document.getElementById('caribbean');
    var italian = document.getElementById('italian')

    american.addEventListener('click', function () {
        type = "american+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

    mexican.addEventListener('click', function () {
        type = "mexican+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

    indian.addEventListener('click', function () {
        type = "indian+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

    chinese.addEventListener('click', function () {
        type = "chinese+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    greek.addEventListener('click', function () {
        type = "greek+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    brazilian.addEventListener('click', function () {
        type = "brazilian+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    african.addEventListener('click', function () {
        type = "african+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    german.addEventListener('click', function () {
        type = "german+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    caribbean.addEventListener('click', function () {
        type = "carribean+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    thai.addEventListener('click', function () {
        type = "thai+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    vegan.addEventListener('click', function () {
        type = "vegan+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    cuban.addEventListener('click', function () {
        type = "cuban+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    french.addEventListener('click', function () {
        type = "french+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    mongolian.addEventListener('click', function () {
        type = "mongolian+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    });

    italian.addEventListener('click', function () {
        type = "italian+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

});