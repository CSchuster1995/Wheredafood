
// google search API
var map = document.getElementById('mapWindow');
var loc = "houston";
var type = "";


var american = document.getElementById('american')
var mexican = document.getElementById('mexican')
var indian = document.getElementById('indian')
var chinese = document.getElementById('chinese')
var greek = document.getElementById('greek')


// american.addEventListener('click', function () {
//     type = "american+cuisine";
//     map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
      
// })

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

greek.addEventListener('click', function(){
    type = "greek+cuisine";
    map.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + "+" + type + "+" + "near" + "+" + loc;
});




// Zomato API


var zomKey = "bd5dfbb9276d36c0b9e8c4e99625e114";



$.ajax({
    url: "https://developers.zomato.com/api/v2.1/cities?q=" + loc,
    type: "GET",
    dataType: "json",
    headers: { "user-key": "bd5dfbb9276d36c0b9e8c4e99625e114" },
    success: function (data) {
        var newData = "";
        newData = data.location_suggestions[0].id;


        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + newData + "&entity_type=city&establishment_type=81",
            type: "GET",
            dataType: "json",
            headers: { "user-key": "bd5dfbb9276d36c0b9e8c4e99625e114" },
            success: function (data) {
                newList = data;

            },

        });


    },

});


$.ajax({
    url: "http://beermapping.com/webservice/loccity/8d98787dfd590fc6a4834ce375b946a5/" + loc + ",tx&s=json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        newBeer = data;

    },

});


var newList = "";


// Beer Mapping Project API
var newBeer = "";


    $.ajax({
        url: "http://beermapping.com/webservice/loccity/8d98787dfd590fc6a4834ce375b946a5/" + loc + ",tx&s=json",
        type: "GET",
        dataType: "json",
        success:function(data){
            newBeer = data;
            
            
            
        },

    }); 



