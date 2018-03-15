
// google search API
var map = document.getElementById('mapWindow');
var loc = "houston";
var type = "";
var modaltitle = document.getElementById('modalTitle')

var american = document.getElementById('american')
var mexican = document.getElementById('mexican')
var indian = document.getElementById('indian')
var chinese = document.getElementById('chinese')
var german = document.getElementById('german')
var italian = document.getElementById('italian')
var greek = document.getElementById('greek')
var french = document.getElementById('french')
var brazillian = document.getElementById('brazillian')
var african = document.getElementById('african')
var mongolian = document.getElementById('mongolian')
var thai = document.getElementById('thai')
var vegan = document.getElementById('vegan')
var cuban = document.getElementById('cuban')
var caribbean = document.getElementById('caribbean')


american.addEventListener('click', function() {
    modaltitle.textContent = "American";
    type = "american+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

mexican.addEventListener('click', function() {
    modaltitle.textContent = "Mexican";
    type = "mexican+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

indian.addEventListener('click', function() {
    modaltitle.textContent = "Indian";
    type = "indian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

chinese.addEventListener('click', function() {
    modaltitle.textContent = "Chinese";
    type = "chinese+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
   
})

german.addEventListener('click', function() {
    modaltitle.textContent = "German";
    type = "german+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

italian.addEventListener('click', function() {
    modaltitle.textContent = "Italian";
    type = "italian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

african.addEventListener('click', function() {
    modaltitle.textContent = "African";
    type = "african+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

vegan.addEventListener('click', function() {
    modaltitle.textContent = "Vegan";
    type = "vegan+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

thai.addEventListener('click', function() {
    modaltitle.textContent = "Thai";
    type = "thai+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

mongolian.addEventListener('click', function() {
    modaltitle.textContent = "Mongolian";
    type = "mongolian+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

french.addEventListener('click', function() {
    modaltitle.textContent = "French";
    type = "french+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

caribbean.addEventListener('click', function() {
    modaltitle.textContent = "Caribbean";
    type = "caribbean+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})

greek.addEventListener('click', function() {
    modaltitle.textContent = "Greek";
    type = "greek+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    console.log(greek)
})

cuban.addEventListener('click', function() {
    modaltitle.textContent = "Cuban";
    type = "cuban+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
    
})



// Zomato API


// var zomKey = "bd5dfbb9276d36c0b9e8c4e99625e114";
// var newData = "";

// $(document).ready(function () {
//     $.ajax({
//         url: "https://developers.zomato.com/api/v2.1/cities?q=" + loc,
//         type: "GET",
//         dataType: "json",
//         headers: { "user-key": "bd5dfbb9276d36c0b9e8c4e99625e114" },
//         success:function(data){
            
//             newData = data.location_suggestions[0].id;

//             $(document).ready(function () {
//                 $.ajax({
//                     url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + newData + "&entity_type=city&establishment_type=81",
//                     type: "GET",
//                     dataType: "json",
//                     headers: { "user-key": "bd5dfbb9276d36c0b9e8c4e99625e114" },
//                     success:function(data){
//                         newList = data;
                        
//                     },
                    
//                 }); 
//             });
            
//         },
        
//     }); 
// });
// var newList = "";
