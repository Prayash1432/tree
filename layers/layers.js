var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SRM_TREES_1 = new ol.format.GeoJSON();
var features_SRM_TREES_1 = format_SRM_TREES_1.readFeatures(json_SRM_TREES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SRM_TREES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SRM_TREES_1.addFeatures(features_SRM_TREES_1);
var lyr_SRM_TREES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SRM_TREES_1, 
                style: style_SRM_TREES_1,
                interactive: true,
                title: '<img src="styles/legend/SRM_TREES_1.png" /> SRM_TREES'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SRM_TREES_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SRM_TREES_1];
lyr_SRM_TREES_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'srm_TREES_TREE': 'srm_TREES_TREE', 'srm_TREES_CLASS': 'srm_TREES_CLASS', });
lyr_SRM_TREES_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'srm_TREES_TREE': 'Range', 'srm_TREES_CLASS': 'TextEdit', });
lyr_SRM_TREES_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'header label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'srm_TREES_TREE': 'no label', 'srm_TREES_CLASS': 'no label', });
lyr_SRM_TREES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});