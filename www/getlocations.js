var request = new XMLHttpRequest()

request.open('GET', '/cgi-bin/devicelocations', true)
request.send()

var deviceLocationsJsonString = ''

request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        deviceLocationsJsonString = this.responseText

        performAfterRequest()
    }
    else {
        //
    }
}

function performAfterRequest() {
    var deviceLocations = JSON.parse(deviceLocationsJsonString)
    renderMap(deviceLocations)
}