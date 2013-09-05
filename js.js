function initialize()
			{
				var option = {
						center: new google.maps.LatLng(-34.397, 150.644),
						zoom: 8,
						mapTypeId: google.maps.MapTypeId.ROADMAP
						};
					carte = new google.maps.Map(document.getElementById("map-canvas"), option);
			}
			
			google.maps.event.addDomListener(window, 'load', initialize);

function setIti1()
			{
				var option = {
						center: new google.maps.LatLng(48.856739,2.299036),
						zoom: 15,
						mapTypeId: google.maps.MapTypeId.ROADMAP
						};
					carte = new google.maps.Map(document.getElementById("map-canvas"), option);

				var iti1 = [
						new google.maps.LatLng(48.857572,2.292577),
						new google.maps.LatLng(48.856569,2.295474),
						new google.maps.LatLng(48.855186,2.296525),
						new google.maps.LatLng(48.856739,2.299036),
						new google.maps.LatLng(48.855496,2.301032),
						new google.maps.LatLng(48.854085,2.298886),
						new google.maps.LatLng(48.852277,2.301568),
						new google.maps.LatLng(48.85376,2.304014)
						];
				var chemin = new google.maps.Polyline({
						path: iti1,
						strokeColor: '#FF0000',
						strokeOpacity: 1.0,
						strokeWeight: 2
						});

				chemin.setMap(carte);

				var depart = new google.maps.LatLng(48.857572,2.292577);
				var arrive = new google.maps.LatLng(48.85376,2.304014);

				var m_depart = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Départ',
						position: depart
						});

				var m_arrive = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Arrivée',
						position: arrive
						});

				// centrer sur le marqueur
  				google.maps.event.addListener(m_depart, 'click', function() {
    			carte.setCenter(m_depart.getPosition());
  				});

  				google.maps.event.addListener(m_arrive, 'click', function() {
    			carte.setCenter(m_arrive.getPosition());
  				});
		}

function centerTo(l1,l2)
{
	carte.panTo(new google.maps.LatLng(l1,l2));
}
		