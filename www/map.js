function renderMap(deviceLocations) {

    var center = [
        deviceLocations[0].coordinate.latitude,
        deviceLocations[0].coordinate.longitude
    ]

    var mymap = L.map('mapid').setView(center, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    for(var index = 0; index < deviceLocations.length; index++) {
        var marker = L.marker([
            deviceLocations[0].coordinate.latitude,
            deviceLocations[0].coordinate.longitude,
        ]).addTo(mymap);
        marker.bindPopup('Phone Number: <b>' + deviceLocations[index].info.phone + '</b><br>Train Number: <b>' + deviceLocations[index].info.trainNo + '</b><br>Track Name: <b>' + deviceLocations[index].info.trackName + '</b>');
    }
}

// mymap.locate({setView: true, maxZoom: 16});
//
// function onLocationFound(e) {
//     var radius = e.accuracy / 2;
//
//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();
//
//     L.circle(e.latlng, radius).addTo(map);
// }
//
// mymap.on('locationfound', onLocationFound);
// function onLocationError(e) {
//     alert(e.message);
// }
//
// mymap.on('locationerror', onLocationError);