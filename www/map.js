function renderMap(deviceLocations) {

    var mymap = L.map('mapid').setView([22.5814171,88.4593132], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    var trainIcon = L.icon({
    iconUrl: 'train.png',
    popupAnchor: [5,5],
});

    for(var index = 0; index < deviceLocations.length; index++) {
        var marker = L.marker([
            deviceLocations[index].coordinate.latitude,
            deviceLocations[index].coordinate.longitude,
        ], {icon: trainIcon}).addTo(mymap);
        marker.bindPopup('Phone Number: <b>' + deviceLocations[index].info.phone + '</b><br>Train Name: <b>' + deviceLocations[index].info.trainName + '</b><br>Train Number: <b>' + deviceLocations[index].info.trainNo + '</b><br>Track Name: <b>' + deviceLocations[index].info.trackName + '</b>');
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