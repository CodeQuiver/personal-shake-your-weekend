  
   function printMap(longitude, latitude){

   
   var mymap = L.map('mapid').setView([longitude, latitude], 15);
    
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiamF5cmVkZDExIiwiYSI6ImNqaGdsaWF3dzFpZjYzZHAzeW4wbHNmb2UifQ.COxlVvDKbzGEnSyy5Um6vg'
    }).addTo(mymap);

    /* Commenting below section out as it doesn't appear relevant to our application and has odd placeholder text
    var marker = L.marker([longitude, latitude]).addTo(mymap);
    
    var circle = L.circle([longitude, latitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 25
    }).addTo(mymap);
    
    var polygon = L.polygon([
        [longitude, latitude],
        [longitude, latitude],
        [longitude, latitude]
    ]).addTo(mymap);*/
    

    // marker.bindPopup("Mcdonald's").openPopup();
    // circle.bindPopup("Mcdonald's");
    // polygon.bindPopup("Mcdonald's");
    
    // var popup = L.popup()
    //     .setLatLng([longitude, latitude])
    //     .setContent("123 Sesame Street, Example, NV")
    //     .openOn(mymap);
    
    //     function onMapClick(e) {
    //         alert("You clicked the map at " + e.latlng);
    //     }
        
    //     mymap.on('click', onMapClick);
    
    //     var popup = L.popup();
    
    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(mymap);
    // }
    
    // mymap.on('click', onMapClick);
}