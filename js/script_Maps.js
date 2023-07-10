var files = document.getElementById("files");
files.addEventListener("change", function() {
  // get the file name
  var name = files.value.split("\\").pop();
  // display the file name
	alert(name);
});
function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AoOD7rLpof2UOkBduy8To8wNaH_TNPTkLRIZxwzGB4XCBwO4l9DIqzT-vJ4_jn7X'
    });

    //Add a click event handler to the map
    Microsoft.Maps.Events.addHandler(map, 'click', function (e) {
        //Get the location of the mouse cursor
        var loc = e.location;

        //Create a pushpin at the clicked location
        var pin = new Microsoft.Maps.Pushpin(loc);

        //Add the pushpin to the map
        map.entities.push(pin);

        //Create a request URL for the elevation service
        var requestUrl = 'https://dev.virtualearth.net/REST/v1/Elevation/List?points=' + loc.latitude + ',' + loc.longitude + '&key=AoOD7rLpof2UOkBduy8To8wNaH_TNPTkLRIZxwzGB4XCBwO4l9DIqzT-vJ4_jn7X';

        //Make an AJAX request to the elevation service
        $.ajax({
            url: requestUrl,
            dataType: 'jsonp',
            jsonp: 'jsonp',
            success: function (data) {
                //Get the elevation value from the response
                var elevation = data.resourceSets[0].resources[0].elevations[0];

                //Create an infobox with the coordinates and elevation of the location
                var infobox = new Microsoft.Maps.Infobox(loc, {
                    title: 'Selected Location',
                    description: 'Latitude: ' + loc.latitude.toFixed(4) + '<br>Longitude: ' + loc.longitude.toFixed(4) +
                        '<br>Elevation: ' + elevation.toFixed(4) + ' meters'
                });

                //Add the infobox to the map
                infobox.setMap(map);
            }
        });
    });
}
