  


    var mymap = L.map('mapid').setView([38.896959, -77.028238], 15);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamF5cmVkZDExIiwiYSI6ImNqaGdsaWF3dzFpZjYzZHAzeW4wbHNmb2UifQ.COxlVvDKbzGEnSyy5Um6vg'
    }).addTo(mymap);

    var marker = L.marker([38.896959, -77.028238]).addTo(mymap);

    var circle = L.circle([38.896959, -77.028238], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 25
    }).addTo(mymap);

    var polygon = L.polygon([
        [38.896959, -77.028238],
        [38.896959, -77.028238],
        [38.896959, -77.028238]
    ]).addTo(mymap);

    marker.bindPopup("Mcdonald's").openPopup();
    circle.bindPopup("Mcdonald's");
    polygon.bindPopup("Mcdonald's");

    var popup = L.popup()
        .setLatLng([38.896959, -77.028238])
        .setContent(" 555 13th St NW, Washington, DC 20004")
        .openOn(mymap);

        function onMapClick(e) {
            alert("You clicked the map at " + e.latlng);
        }
        
        mymap.on('click', onMapClick);

        var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);