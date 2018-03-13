// (function() { 
//     var url = "https://www.google.com/maps/search/?api=1&query=McDonalds+seattle+wa;"
//     var apiKey = "AIzaSyAjYpPpsOQYeTdlW_5CL09rBKHsXSbkrto";
//     var httpRequest;
//     makeRequest();



//     function makeRequest() {
//         httpRequest = new XMLHttpRequest();
//         httpRequest.onreadystatechange = responseMethod;
//         httpRequest.open('GET', url + '&key=' + apiKey);
//         httpRequest.send();
//     }

//     function responseMethod() {
//         if (httpRequest.readyState === 4) {
//             if (httpRequest.status === 200) {
//                 updatedUISuccess(httpRequest.responseText);
//             }else {
//                 updatedUIError();
//             }
//         }

//         function toggleStreetView() {
//             var toggle = panorama.getVisible();
//             if (toggle == false) {
//                 panorama.setVisible(true);
//             } else {
//                 panorama.setVisible(false);
//             }
//         }





        var panorama;

        function initMap() {
          var astorPlace = {lat: 40.729884, lng: -73.990988};
  
          // Set up the map
          var map = new google.maps.Map(document.getElementById('map'), {
            center: astorPlace,
            zoom: 18,
            streetViewControl: false
          });
  
          // Set up the markers on the map
          var cafeMarker = new google.maps.Marker({
              position: {lat: 40.730031, lng: -73.991428},
              map: map,
              icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00',
              title: 'Cafe'
          });
  
          var bankMarker = new google.maps.Marker({
              position: {lat: 40.729681, lng: -73.991138},
              map: map,
              icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00',
              title: 'Bank'
          });
  
          var busMarker = new google.maps.Marker({
              position: {lat: 40.729559, lng: -73.990741},
              map: map,
              icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00',
              title: 'Bus Stop'
          });
  
          // We get the map's default panorama and set up some defaults.
          // Note that we don't yet set it visible.
          panorama = map.getStreetView();
          panorama.setPosition(astorPlace);
          panorama.setPov(/** @type {google.maps.StreetViewPov} */({
            heading: 265,
            pitch: 0
          }));
        }
  
        function toggleStreetView() {
          var toggle = panorama.getVisible();
          if (toggle == false) {
            panorama.setVisible(true);
          } else {
            panorama.setVisible(false);
          }
        }
      