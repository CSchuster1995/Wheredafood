
// Beer Mapping Project API


var map = document.getElementById('mapWindow');
var loc = "houston"
var type = "";
var fCol = document.getElementById('fCol');
var sCol = document.getElementById('sCol');


 
var newBar = "";




$(document).ready(function () {
    $.ajax({
        url: "http://beermapping.com/webservice/loccity/8d98787dfd590fc6a4834ce375b946a5/" + loc + "&s=json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            newBar = data;
            
            for (i = 0; i < 30; i += 2) {
                firstCol(i);
                

            }
            for (j = 1; j < 30; j += 2) {
                secondCol(j);
                
            }

        },

    });

    function firstCol(x) {
        
        
        $('#fCol').append('<div id="' + x + '">' +
            '<h3>' + newBar[x].name + '</h3>' +
            '<p>' + newBar[x].street + '</p>' +
            '<p>' + newBar[x].city + '</p>' +
            '<p>' + newBar[x].state + '</p>' +
            '<a href="#modalMap" role="button" restaurant data-toggle="modal">open map</a>' +
            
            
            '</div>')

    }

    function secondCol(x) {
       
        $('#sCol').append('<div id="' + x + '">' +
        '<h3>' + newBar[x].name + '</h3>' +
        '<p>' + newBar[x].street + '</p>' +
        '<p>' + newBar[x].city + '</p>' +
        '<p>' + newBar[x].state + '</p>' +
        '<a href="#modalMap" role="button" restaurant data-toggle="modal">open map</a>' +
         
        
        '</div>')
    }

})


    
$(document).on('click', [data="restaurant"], function(e) {
    type = e.target.parentElement.firstChild.textContent;
    mapWindow.src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyBhAxU0T3tdTd04TZMIi0ZXXu3fuDpELok&q=" + type + "near" + loc;
})


// e.target.parentElement.firstChild.textContent