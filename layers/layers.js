ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-867175.123877, 7142351.690323, -697198.789045, 7255053.390592]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amenity_pub_monaghan_1 = new ol.format.GeoJSON();
var features_amenity_pub_monaghan_1 = format_amenity_pub_monaghan_1.readFeatures(json_amenity_pub_monaghan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_pub_monaghan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_pub_monaghan_1.addFeatures(features_amenity_pub_monaghan_1);cluster_amenity_pub_monaghan_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_amenity_pub_monaghan_1
});
var lyr_amenity_pub_monaghan_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_amenity_pub_monaghan_1, 
                style: style_amenity_pub_monaghan_1,
                popuplayertitle: "amenity_pub_monaghan",
                interactive: true,
                title: '<img src="styles/legend/amenity_pub_monaghan_1.png" /> amenity_pub_monaghan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_amenity_pub_monaghan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_amenity_pub_monaghan_1];
lyr_amenity_pub_monaghan_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'entrance': 'entrance', 'addr:housenumber': 'addr:housenumber', 'start_date': 'start_date', 'smoking': 'smoking', 'outdoor_seating': 'outdoor_seating', 'opening_hours': 'opening_hours', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'operator': 'operator', 'addr:country': 'addr:country', 'alt_name': 'alt_name', 'addr:street': 'addr:street', 'addr:county': 'addr:county', 'website': 'website', 'phone': 'phone', 'name': 'name', 'internet_access': 'internet_access', 'food': 'food', 'email': 'email', 'addr:postcode': 'addr:postcode', 'addr:place': 'addr:place', 'addr:city': 'addr:city', });
lyr_amenity_pub_monaghan_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'entrance': 'TextEdit', 'addr:housenumber': 'TextEdit', 'start_date': 'TextEdit', 'smoking': 'TextEdit', 'outdoor_seating': 'TextEdit', 'opening_hours': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:email': 'TextEdit', 'operator': 'TextEdit', 'addr:country': 'TextEdit', 'alt_name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:county': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'name': 'TextEdit', 'internet_access': 'TextEdit', 'food': 'TextEdit', 'email': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:place': 'TextEdit', 'addr:city': 'TextEdit', });
lyr_amenity_pub_monaghan_1.set('fieldLabels', {'full_id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'osm_type': 'inline label - visible with data', 'amenity': 'inline label - visible with data', 'entrance': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'start_date': 'inline label - visible with data', 'smoking': 'inline label - visible with data', 'outdoor_seating': 'inline label - visible with data', 'opening_hours': 'inline label - visible with data', 'contact:phone': 'inline label - visible with data', 'contact:email': 'inline label - visible with data', 'operator': 'inline label - visible with data', 'addr:country': 'inline label - visible with data', 'alt_name': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:county': 'inline label - visible with data', 'website': 'inline label - visible with data', 'phone': 'no label', 'name': 'no label', 'internet_access': 'no label', 'food': 'no label', 'email': 'no label', 'addr:postcode': 'no label', 'addr:place': 'no label', 'addr:city': 'no label', });
lyr_amenity_pub_monaghan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});