function renderMap() {
    var mymap = L.map('mapid').setView([22.582255, 88.457659], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);


    var marker = L.marker([22.582255, 88.457659]).addTo(mymap);
    marker.bindPopup("You clicked me!");
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