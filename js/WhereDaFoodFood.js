
// google search API
<<<<<<< HEAD
=======

>>>>>>> aa927f61fbbef8c70d2e4278a1ce2d0069c1867f
    
    var map = document.getElementById('mapWindow');
    var loc = "houston";
    var type = "";
    var modaltitle = document.getElementById('modalTitle')

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
        modaltitle.textContent = "American Cuisine";
        type = "american+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

    mexican.addEventListener('click', function () {
        modaltitle.textContent = "Mexian Cuisine";
        type = "mexican+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

    indian.addEventListener('click', function () {
        modaltitle.textContent = "Indian Cuisine";
        type = "indian+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })

    chinese.addEventListener('click', function () {
        modaltitle.textContent = "Chinese Cuisine";
        type = "chinese+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    greek.addEventListener('click', function () {
        modaltitle.textContent = "Greek Cuisine";
        type = "greek+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    brazilian.addEventListener('click', function () {
        modaltitle.textContent = "Brazilian Cuisine";
        type = "brazilian+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    african.addEventListener('click', function () {
        modaltitle.textContent = "African Cuisine";
        type = "african+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    german.addEventListener('click', function () {
        modaltitle.textContent = "German Cuisine";
        type = "german+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    caribbean.addEventListener('click', function () {
        modaltitle.textContent = "Caribbean Cuisine";
        type = "carribean+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    thai.addEventListener('click', function () {
        modaltitle.textContent = "Thai Cuisine";
        type = "thai+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    vegan.addEventListener('click', function () {
        modaltitle.textContent = "Vegan Cuisine";
        type = "vegan+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    cuban.addEventListener('click', function () {
        modaltitle.textContent = "Cuban Cuisine";
        type = "cuban+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    french.addEventListener('click', function () {
        modaltitle.textContent = "French Cuisine";
        type = "french+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    })

    mongolian.addEventListener('click', function () {
        modaltitle.textContent = "Mongolian Cuisine";
        type = "mongolian+cuisine"
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    });

    italian.addEventListener('click', function () {
        modaltitle.textContent = "Italian Cuisine";
        type = "italian+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })
<<<<<<< HEAD
    
=======
    japanese.addEventListener('click', function () {
        modaltitle.textContent = "Japanese Cuisine";
        type = "japanese+cuisine";
        map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

    })



$('#cityForm').submit(function(e) {
    e.preventDefault();
    var newLoc = $('#cityForm');
    loc = newLoc[0].lastChild.previousSibling.value;
    console.log(newLoc[0].lastChild.previousSibling.value);
    newLoc[0].lastChild.previousSibling.value = "";
    $('#header').text(loc)
    
    

})
>>>>>>> aa927f61fbbef8c70d2e4278a1ce2d0069c1867f
