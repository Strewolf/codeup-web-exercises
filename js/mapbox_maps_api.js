mapboxgl.accessToken=mapboxKey
navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{
    enableHighAccuracy:true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([36.1716, 115.1391])
}


function setupMap (center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    map.addControl(new MapboxDirections({
        accessToken: mapboxKey,
        unit: 'imperial',
        profile: 'mapbox/driving',
    }), 'top-left');

    const geojson = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-98.48235,29.43767]
                },
                properties: {
                    title: 'Tre Trattoria',
                    description: 'Italian food'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-98.46592,29.51488]
                },
                properties: {
                    title: 'The Beignet Stand',
                    description: 'beignets and coffee'
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-98.47994,29.49380]
                },
                properties: {
                    title: 'Snooze,an A.M Eatery',
                    description: 'American Breakfast'
                }
            }
        ]
    };
    // add markers to map
    geojson.features.forEach((feature) => {
        const el = document.createElement('div');
        el.className = 'marker';

        const marker = new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`))
            .addTo(map);
    });

}

