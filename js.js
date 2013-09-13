function setCont()
			{
				var option = {
						center: new google.maps.LatLng(48.815488,2.363144),
						zoom: 19,
						mapTypeId: google.maps.MapTypeId.ROADMAP
						};
					carte_contact = new google.maps.Map(document.getElementById("map-canvas"), option);

			
			agence = new google.maps.LatLng(48.815488,2.363144); //Epitech = Agence

			m_agence = new google.maps.Marker({
					    map:carte_contact,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Paris FRANCE',
						position: agence
						});

			}

function setIti1()
			{
				var option = {
						center: new google.maps.LatLng(17.602139,-13.690681),
						zoom: 2,
						mapTypeId: google.maps.MapTypeId.ROADMAP
						};
					carte = new google.maps.Map(document.getElementById("map-canvas"), option);

				var iti1 = [
						new google.maps.LatLng(48.86223,2.351707), //Paris FRANCE
						new google.maps.LatLng(25.281954,51.523712), //Doha QATAR
						new google.maps.LatLng(-26.203502,28.048385), //Johannesbourg AFRIQUE DU SUD
						new google.maps.LatLng(-33.92456,18.424652), //Le Cap AFRIQUE DU SUD
						new google.maps.LatLng(-22.902743,-43.208939), //Rio de Janeiro BRESIL
						new google.maps.LatLng(-23.552028,-46.638443), //São Paulo BRESIL
						new google.maps.LatLng(-34.603753,-58.381523), //Buenos Aires ARGENTINE
						new google.maps.LatLng(-12.050065,-77.059693), //Lima PERU
						new google.maps.LatLng(23.114154,-82.388245), //Havana CUBA
						new google.maps.LatLng(40.783661,-73.967042), //Manahatan NEW YROK
						new google.maps.LatLng(48.86223,2.351707) //Paris FRANCE
						];

				var chemin = new google.maps.Polyline({
						path: iti1,
						strokeColor: '#FF0000',
						strokeOpacity: 1.0,
						strokeWeight: 2
						});

				chemin.setMap(carte);

				var paris = new google.maps.LatLng(48.86223,2.351707); //Paris FRANCE
				var doha = new google.maps.LatLng(25.281954,51.523712); //Doha QATAR
				var johan = new google.maps.LatLng(-26.203502,28.048385); //Johannesbourg AFRIQUE DU SUD
				var lecap = new google.maps.LatLng(-33.92456,18.424652); //Le Cap AFRIQUE DU SUD
				var saopaulo = new google.maps.LatLng(-23.552028,-46.638443); //São Paulo BRESIL
				var rio = new google.maps.LatLng(-22.902743,-43.208939); //Rio de Janeiro BRESIL
				var bueno = new google.maps.LatLng(-34.603753,-58.381523); //Buenos Aires ARGENTINE
				var lima = new google.maps.LatLng(-12.050065,-77.059693); //Lima PERU
				var hava = new google.maps.LatLng(23.114154,-82.388245); //Havana CUBA
				var mana = new google.maps.LatLng(40.783661,-73.967042); //Manahatan NEW YROK

				m_paris = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Paris FRANCE',
						position: paris
						});

				m_doha = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Doha QATAR',
						position: doha
						});

				m_johan = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Johannesbourg AFRIQUE DU SUD',
						position: johan
						});

				m_lecap = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Le Cap AFRIQUE DU SUD',
						position: lecap
						});

				m_saopaulo = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'São Paulo BRESIL',
						position: saopaulo
						});

				m_rio = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Rio de Janeiro BRESIL',
						position: rio
						});

				m_bueno = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Buenos Aires ARGENTINE',
						position: bueno
						});

				m_lima = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Lima PERU',
						position: lima
						});

				m_hava = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'Havana CUBA',
						position: hava
						});

				m_mana = new google.maps.Marker({
					    map:carte,
						draggable:false,
						animation: google.maps.Animation.DROP,
						title: 'NEW YROK (Manahatan) USA ',
						position: mana
						});

				// click centrer sur le marqueur

				google.maps.event.addListener(m_paris, 'click', function() {
    			carte.setCenter(m_paris.getPosition());
  				});

  				google.maps.event.addListener(m_doha, 'click', function() {
    			carte.setCenter(m_doha.getPosition());
  				});

  				google.maps.event.addListener(m_johan, 'click', function() {
    			carte.setCenter(m_johan.getPosition());
  				});

  				google.maps.event.addListener(m_lecap, 'click', function() {
    			carte.setCenter(m_lecap.getPosition());
  				});

  				google.maps.event.addListener(m_saopaulo, 'click', function() {
    			carte.setCenter(m_saopaulo.getPosition());
  				});

  				google.maps.event.addListener(m_rio, 'click', function() {
    			carte.setCenter(m_rio.getPosition());
  				});

  				google.maps.event.addListener(m_bueno, 'click', function() {
    			carte.setCenter(m_bueno.getPosition());
  				});

  				google.maps.event.addListener(m_lima, 'click', function() {
    			carte.setCenter(m_lima.getPosition());
  				});

  				google.maps.event.addListener(m_hava, 'click', function() {
    			carte.setCenter(m_hava.getPosition());
  				});

  				google.maps.event.addListener(m_mana, 'click', function() {
    			carte.setCenter(m_mana.getPosition());
  				});

  				// info marqueur

  				info_content_paris = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=PARIS|14|000|flag_fr|24|000|FFF' alt='drap_fr'></h1>On n’a jamais fini de découvrir Paris tant la capitale de la France est riche de monuments, de musées et de découvertes. Lovée dans une boucle de la Seine, au centre du bassin parisien, la Ville Lumière a un rayonnement artistique et culturel sans égal dans le monde entier. Elle est aussi la capitale mondiale de la mode et du luxe.</div>";

  				info_paris = new google.maps.InfoWindow({
      					content: info_content_paris,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_paris, 'click', function() {
    			info_paris.open(carte,m_paris);
  				});

  				info_content_doha = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=DOHA|14|000|flag_qa|24|000|FFF' alt='drap_qa'></h1>Doha (en arabe : الدوحة, ad-Dawha ou ad-Doha, littéralement « le grand arbre » ou « l'arbre collant ») est la capitale du Qatar. Située sur le golfe Persique, avec une corniche de 7 km, elle a en 2008 une population de 998 651 habitants. Doha est la plus grande ville du Qatar, abritant avec sa proche banlieue plus de 80% de la population du pays. C'est également le centre économique du pays.</div>";

  				info_doha = new google.maps.InfoWindow({
      					content: info_content_doha,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_doha, 'click', function() {
    			info_doha.open(carte,m_doha);
  				});

  				info_content_johan = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=JOHANNESBOURG|14|000|flag_za|24|000|FFF' alt='drap_za'></h1>Johannesburg ou Johannesbourg est une ville et une métropole d'Afrique du Sud, fondée en 1886 au Transvaal et actuelle capitale de la province de Gauteng, la plus riche d'Afrique du Sud.</div>";
  				info_johan = new google.maps.InfoWindow({
      					content: info_content_johan,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_johan, 'click', function() {
    			info_johan.open(carte,m_johan);
  				});


  				info_content_lecap = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=LE%20CAP|14|000|flag_za|24|000|FFF' alt='drap_za'></h1>Le Cap (Kaapstad en afrikaans, Cape Town en anglais, iKapa en xhosa) est une ville d'Afrique du Sud, capitale de la colonie du Cap (1652-1910) puis de la province du Cap (1910-1994). Elle est actuellement la capitale provinciale du Cap-Occidental.</div>";

  				info_lecap = new google.maps.InfoWindow({
      					content: info_content_lecap,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_lecap, 'click', function() {
    			info_lecap.open(carte,m_lecap);
  				});

  				info_content_saopaulo = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=SAO%20PAULO|14|000|flag_br|24|000|FFF' alt='drap_br'></h1>São Paulo (prononciation portugaise : /sɐ̃w̃ ˈpaw.lu/) ou Sao Paulo2 (« Saint-Paul » en français) est la plus grande ville du Brésil. Située dans le sud-est du pays, elle est la capitale de l'État de São Paulo et le principal centre financier, commercial et industriel de l'Amérique latine, elle est aussi la capitale culturelle du Brésil. C'est encore la ville qui compte le plus de lusophones au monde, c'est aussi la ville la plus peuplée du Brésil et d'Amérique latine.</div>";

  				info_saopaulo = new google.maps.InfoWindow({
      					content: info_content_saopaulo,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_saopaulo, 'click', function() {
    			info_saopaulo.open(carte,m_saopaulo);
  				});

  				info_content_rio = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=RIO%20DE%20JANEIRO|14|000|flag_br|24|000|FFF' alt='drap_br'></h1>Rio de Janeiro est la deuxième plus grande ville du Brésil derrière São Paulo. Située au sud-est du pays, elle est la capitale de l'État de Rio de Janeiro. Avec ses 6,1 millions d'habitants intra-muros (communément appelés les Cariocas, la variante « Carioques » existant en français) et 12,62 millions dans l'aire urbaine, Rio de Janeiro est l'une des métropoles les plus importantes du continent américain.</div>";

  				info_rio = new google.maps.InfoWindow({
      					content: info_content_rio,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_rio, 'click', function() {
    			info_rio.open(carte,m_rio);
  				});

  				info_content_bueno = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=BUENOS%20AIRES|14|000|flag_ar|24|000|FFF' alt='drap_ar'></h1>Buenos Aires ([bɥɛnɔzɛr]1, en espagnol [ˌbwɛnɔs 'ajɾɛs] ) est la capitale et la ville la plus importante de l'Argentine, c’est aussi la deuxième ville la plus peuplée d’Amérique du Sud (après São Paulo) et une des 16 plus peuplées au monde. Les projections pour 2009 estiment la population de la ville à 3 050 700 habitants2 et à 12 925 000 habitants3 pour son agglomération urbaine, le Grand Buenos Aires. Les habitants sont les « Portènes » (porteños, en espagnol, littéralement « les habitants du port »), à ne pas confondre avec les « Buenos-airiens » (bonaerenses), habitants de la province de Buenos Aires dont ne fait pas partie la capitale fédérale. Ils sont pour la plupart d’origine espagnole ou italienne et la religion prépondérante est le catholicisme.</div>";

  				info_bueno = new google.maps.InfoWindow({
      					content: info_content_bueno,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_bueno, 'click', function() {
    			info_bueno.open(carte,m_bueno);
  				});

  				info_content_lima = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=LIMA|14|000|flag_pe|24|000|FFF' alt='drap_pe'></h1>Lima (prononcé [lima]) est la capitale et principale ville du Pérou, ainsi que le chef-lieu de la région de Lima. Au milieu de la façade maritime du Pérou sur l'océan Pacifique, Lima s'étend sur les vallées de trois fleuves : Rimac, Chillón et Lurín.</div>";

  				info_lima = new google.maps.InfoWindow({
      					content: info_content_lima,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_lima, 'click', function() {
    			info_lima.open(carte,m_lima);
  				});

  				info_content_hava = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=LA%20HAVANE|14|000|flag_cu|24|000|FFF' alt='drap_cu'></h1>La Havane (en espagnol : La Habana [la aˈβana], Ciudad de La Habana officiellement) est la capitale, un port et le centre économique de Cuba. La ville est aussi l'une des quatorze provinces cubaines. La ville/province compte 2,4 millions d'habitants, tandis que l'agglomération en compte plus de 3,7 millions, ce qui fait de La Havane la plus grande ville des Caraïbes1. La ville s'étend sur plus de 720 kilomètres carrés principalement à l'ouest et au sud d'une baie, à laquelle on accède par un passage étroit, et qui est divisé en trois ports : Marimelena, Guanabacoa et Atarés. La rivière Almendares traverse la ville du sud au nord, et se jette dans le détroit de Floride à quelques kilomètres à l'ouest de la baie.</div>";

  				info_hava = new google.maps.InfoWindow({
      					content: info_content_hava,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_hava, 'click', function() {
    			info_hava.open(carte,m_hava);
  				});

  				info_content_mana = "<div class='desc'><h1><img src='https://chart.googleapis.com/chart?chst=d_simple_text_icon_left&chld=MANHATTAN|14|000|flag_us|24|000|FFF' alt='drap_us'></h1>Manhattan est l'un des cinq arrondissements (en anglais borough) de la ville de New York (les quatre autres étant le Bronx, Queens, Brooklyn et Staten Island), il correspond en grande partie à l'île de Manhattan, d'une superficie de 58,8 km2, entourée par l'Hudson River à l'ouest, l'East River à l'est, l'Upper New York Bay au sud, et l'Harlem River au nord. Comme les autres arrondissements de la ville, Manhattan coïncide avec un comté de l'État de New York (New York County), découpage administratif de l’État de New York1, mais ces derniers ne fonctionnent pas comme des comtés à proprement parler, en effet, ils n'ont aucun pouvoirs et dépendent directement de l'autorité municipale. En 2012, sa population était de 1 619 090 habitants2, et sa densité est très supérieure à celle de tout autre comté des États-Unis.</div>";

  				info_mana = new google.maps.InfoWindow({
      					content: info_content_mana,
  						maxWidth:300
  						});

  				google.maps.event.addListener(m_mana, 'click', function() {
    			info_mana.open(carte,m_mana);


  				});

  				m_marker = new Array();
				m_marker[0] = m_paris;
				m_marker[1] = m_doha;
				m_marker[2] = m_johan;
				m_marker[3] = m_lecap;
				m_marker[4] = m_rio;
				m_marker[5] = m_saopaulo;
				m_marker[6] = m_bueno;
				m_marker[7] = m_lima;
				m_marker[8] = m_hava;
				m_marker[9] = m_mana;

				info_city = new Array();
				info_city[0] = info_paris;
				info_city[1] = info_doha;
				info_city[2] = info_johan;
				info_city[3] = info_lecap;
				info_city[4] = info_rio;
				info_city[5] = info_saopaulo;
				info_city[6] = info_bueno;
				info_city[7] = info_lima;
				info_city[8] = info_hava;
				info_city[9] = info_mana;
			}





function centerTo(l1,l2,info_ville,m_ville)
{
	carte.panTo(new google.maps.LatLng(l1,l2));
	info_ville.open(carte,m_ville);

	for ( x=0 ; x < m_marker.length ; x++ )
	{
		if ( m_ville != m_marker[x] )
		{
			info_city[x].close(carte,m_marker[x]);
		}
	}
	
}


mydiv = new Array();
mydiv[0] = "accueil";
mydiv[1] = "etape";
mydiv[2] = "tarif";
mydiv[3] = "contact";

function hidediv(id)
{
	if (id == "etape" || id=="contact")
		{
			document.getElementById('map-canvas').style.display = "block";
			document.getElementById('slider').style.display = "none";
		}
		else
		{
			document.getElementById('map-canvas').style.display = "none";
			document.getElementById('slider').style.display = "block";
		}

	for ( i=0 ; i < mydiv.length ; i++ )
	{
		if ( id != mydiv[i] )
		{
			document.getElementById(mydiv[i]).style.display = "none";
		}
		else
		{
			document.getElementById(mydiv[i]).style.display = "block";
		}
	}
}

