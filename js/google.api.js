
// google search API
var map = document.getElementById('mapWindow');
var loc = "houston";
var type = "";

var american = document.getElementById('american');
var mexican = document.getElementById('mexican');
var indian = document.getElementById('indian');
var chinese = document.getElementById('chinese');
var greek = document.getElementById('greek');
var african = document.getElementById('africa');
var vegan = document.getElementById('vegan');
var mongolian = document.getElementById('mongolian');
var thai = document.getElementById('thai');
var german = document.getElementById('german');
var cuban = document.getElementById('cuban')
var brazilian = document.getElementById('brazilian');
var french = document.getElementById('french');
var caribbean = document.getElementById('caribbean');
var italin = document.getElementById('italian')

american.addEventListener('click', function () {
    loc = "77003";
    type = "american+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;

})

mexican.addEventListener('click', function () {
    type = "mexican+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;

})

indian.addEventListener('click', function () {
    type = "indian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;

})

chinese.addEventListener('click', function () {
    type = "chinese+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;

})

greek.addEventListener('click', function () {
    type = "greek+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

brazilian.addEventListener('click', function () {
    type = "brazilian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

african.addEventListener('click', function () {
    type = "african+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

german.addEventListener('click', function () {
    type = "german+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

caribbean.addEventListener('click', function () {
    type = "carribean+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

thai.addEventListener('click', function () {
    type = "thai+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

vegan.addEventListener('click', function () {
    type = "vegan+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

cuban.addEventListener('click', function () {
    type = "cuban+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

french.addEventListener('click', function () {
    type = "french+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
})

mongolian.addEventListener('click', function () {
    type = "mongolian+cuisine"
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;
});

italin.addEventListener('click', function () {
    type = "italian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "cuisine" + "+" + loc;

})

