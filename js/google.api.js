
// google search API
var map = document.getElementById('mapWindow');
var loc = "houston";
var type = "";

var american = document.getElementById('american')
var mexican = document.getElementById('mexican')
var indian = document.getElementById('indian')
var chinese = document.getElementById('chinese')


american.addEventListener('click', function() {
    loc = "77003";
    type = "american+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

mexican.addEventListener('click', function() {
    type = "mexican+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

})

indian.addEventListener('click', function() {
    type = "indian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

})

chinese.addEventListener('click', function() {
    type = "chinese+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;

})




// Zomato API
(function() {

var url = "https://developers.zomato.com/api/v2.1/cities?q=" + loc
var zomKey = "bd5dfbb9276d36c0b9e8c4e99625e114";



})();

