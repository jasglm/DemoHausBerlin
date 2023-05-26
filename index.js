// Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de Google Maps
function initMap() {
  var address =
    "Haus Berlin, Calle 55 #885 Por 100-2 y 106, Fraccionamiento Las Américas, 97302 Mérida, Yuc., México"; // Reemplaza 'TU_DIRECCION_AQUI' con tu dirección

  // Crea un objeto de mapa de Google con la dirección especificada
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, // Ajusta el nivel de zoom según tus necesidades
    center: { lat: 0, lng: 0 }, // Coordenadas iniciales (se reemplazarán con la dirección geocodificada)
  });

  // Crea un objeto de geocodificación para obtener las coordenadas de la dirección
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function (results, status) {
    if (status === "OK") {
      if (results[0]) {
        // Obtiene las coordenadas geocodificadas de la dirección
        var location = results[0].geometry.location;

        // Actualiza el centro del mapa con las coordenadas de la dirección
        map.setCenter(location);

        // Crea un marcador en la ubicación de la dirección
        new google.maps.Marker({
          map: map,
          position: location,
          title: address,
        });
      }
    } else {
      console.log(
        "Geocode was not successful for the following reason: " + status
      );
    }
  });
}
