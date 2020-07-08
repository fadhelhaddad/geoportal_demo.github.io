var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_floodedarea_1m_1 = new ol.format.GeoJSON();
var features_floodedarea_1m_1 = format_floodedarea_1m_1.readFeatures(json_floodedarea_1m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodedarea_1m_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_floodedarea_1m_1.addFeatures(features_floodedarea_1m_1);var lyr_floodedarea_1m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floodedarea_1m_1, 
                style: style_floodedarea_1m_1,
                title: '<img src="styles/legend/floodedarea_1m_1.png" /> floodedarea_1m'
            });var format_floodedarea_2m_2 = new ol.format.GeoJSON();
var features_floodedarea_2m_2 = format_floodedarea_2m_2.readFeatures(json_floodedarea_2m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodedarea_2m_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_floodedarea_2m_2.addFeatures(features_floodedarea_2m_2);var lyr_floodedarea_2m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floodedarea_2m_2, 
                style: style_floodedarea_2m_2,
                title: '<img src="styles/legend/floodedarea_2m_2.png" /> floodedarea_2m'
            });var format_floodedarea_3m_3 = new ol.format.GeoJSON();
var features_floodedarea_3m_3 = format_floodedarea_3m_3.readFeatures(json_floodedarea_3m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodedarea_3m_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_floodedarea_3m_3.addFeatures(features_floodedarea_3m_3);var lyr_floodedarea_3m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floodedarea_3m_3, 
                style: style_floodedarea_3m_3,
                title: '<img src="styles/legend/floodedarea_3m_3.png" /> floodedarea_3m'
            });

lyr_OSMStandard_0.setVisible(true);lyr_floodedarea_1m_1.setVisible(true);lyr_floodedarea_2m_2.setVisible(true);lyr_floodedarea_3m_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_floodedarea_1m_1,lyr_floodedarea_2m_2,lyr_floodedarea_3m_3];
lyr_floodedarea_1m_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_floodedarea_2m_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_floodedarea_3m_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_floodedarea_1m_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_floodedarea_2m_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_floodedarea_3m_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_floodedarea_1m_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_floodedarea_2m_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_floodedarea_3m_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_floodedarea_3m_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});