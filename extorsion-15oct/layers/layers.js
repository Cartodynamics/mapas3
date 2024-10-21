var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Sectores_2 = new ol.format.GeoJSON();
var features_Sectores_2 = format_Sectores_2.readFeatures(json_Sectores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sectores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_2.addFeatures(features_Sectores_2);
var lyr_Sectores_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sectores_2, 
                style: style_Sectores_2,
                popuplayertitle: "Sectores",
                interactive: false,
                title: '<img src="styles/legend/Sectores_2.png" /> Sectores'
            });
var format_Alcaldas_3 = new ol.format.GeoJSON();
var features_Alcaldas_3 = format_Alcaldas_3.readFeatures(json_Alcaldas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcaldas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcaldas_3.addFeatures(features_Alcaldas_3);
var lyr_Alcaldas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alcaldas_3, 
                style: style_Alcaldas_3,
                popuplayertitle: "Alcaldías",
                interactive: false,
                title: '<img src="styles/legend/Alcaldas_3.png" /> Alcaldías'
            });
var format_Clustersde1km_4 = new ol.format.GeoJSON();
var features_Clustersde1km_4 = format_Clustersde1km_4.readFeatures(json_Clustersde1km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clustersde1km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clustersde1km_4.addFeatures(features_Clustersde1km_4);
var lyr_Clustersde1km_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clustersde1km_4, 
                style: style_Clustersde1km_4,
                popuplayertitle: "Clusters de 1km",
                interactive: true,
    title: 'Clusters de 1km<br />\
    <img src="styles/legend/Clustersde1km_4_0.png" /> 9 - 25<br />\
    <img src="styles/legend/Clustersde1km_4_1.png" /> 25 - 61<br />\
    <img src="styles/legend/Clustersde1km_4_2.png" /> 61 - 125<br />\
    <img src="styles/legend/Clustersde1km_4_3.png" /> 125 - 440<br />'
        });
var format_Denunciadehechos_5 = new ol.format.GeoJSON();
var features_Denunciadehechos_5 = format_Denunciadehechos_5.readFeatures(json_Denunciadehechos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Denunciadehechos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Denunciadehechos_5.addFeatures(features_Denunciadehechos_5);
var lyr_Denunciadehechos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Denunciadehechos_5, 
                style: style_Denunciadehechos_5,
                popuplayertitle: "Denuncia de hechos",
                interactive: true,
                title: '<img src="styles/legend/Denunciadehechos_5.png" /> Denuncia de hechos'
            });
var format_Cobranzailegtima_6 = new ol.format.GeoJSON();
var features_Cobranzailegtima_6 = format_Cobranzailegtima_6.readFeatures(json_Cobranzailegtima_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cobranzailegtima_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cobranzailegtima_6.addFeatures(features_Cobranzailegtima_6);
var lyr_Cobranzailegtima_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cobranzailegtima_6, 
                style: style_Cobranzailegtima_6,
                popuplayertitle: "Cobranza ilegítima",
                interactive: true,
    title: 'Cobranza ilegítima<br />\
    <img src="styles/legend/Cobranzailegtima_6_0.png" /> En persona<br />\
    <img src="styles/legend/Cobranzailegtima_6_1.png" /> Vía remota<br />'
        });
var format_Fraude_7 = new ol.format.GeoJSON();
var features_Fraude_7 = format_Fraude_7.readFeatures(json_Fraude_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fraude_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fraude_7.addFeatures(features_Fraude_7);
var lyr_Fraude_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fraude_7, 
                style: style_Fraude_7,
                popuplayertitle: "Fraude",
                interactive: true,
    title: 'Fraude<br />\
    <img src="styles/legend/Fraude_7_0.png" /> En persona<br />\
    <img src="styles/legend/Fraude_7_1.png" /> Vía remota<br />'
        });
var format_Amenazas_8 = new ol.format.GeoJSON();
var features_Amenazas_8 = format_Amenazas_8.readFeatures(json_Amenazas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amenazas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amenazas_8.addFeatures(features_Amenazas_8);
var lyr_Amenazas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amenazas_8, 
                style: style_Amenazas_8,
                popuplayertitle: "Amenazas",
                interactive: true,
    title: 'Amenazas<br />\
    <img src="styles/legend/Amenazas_8_0.png" /> En persona<br />\
    <img src="styles/legend/Amenazas_8_1.png" /> Vía remota<br />'
        });
var format_Tentativadeextorsin_9 = new ol.format.GeoJSON();
var features_Tentativadeextorsin_9 = format_Tentativadeextorsin_9.readFeatures(json_Tentativadeextorsin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tentativadeextorsin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tentativadeextorsin_9.addFeatures(features_Tentativadeextorsin_9);
var lyr_Tentativadeextorsin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tentativadeextorsin_9, 
                style: style_Tentativadeextorsin_9,
                popuplayertitle: "Tentativa de extorsión",
                interactive: true,
    title: 'Tentativa de extorsión<br />\
    <img src="styles/legend/Tentativadeextorsin_9_0.png" /> En persona<br />\
    <img src="styles/legend/Tentativadeextorsin_9_1.png" /> Vía remota<br />'
        });
var format_Extorsin_10 = new ol.format.GeoJSON();
var features_Extorsin_10 = format_Extorsin_10.readFeatures(json_Extorsin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extorsin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extorsin_10.addFeatures(features_Extorsin_10);
var lyr_Extorsin_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extorsin_10, 
                style: style_Extorsin_10,
                popuplayertitle: "Extorsión",
                interactive: true,
    title: 'Extorsión<br />\
    <img src="styles/legend/Extorsin_10_0.png" /> En persona<br />\
    <img src="styles/legend/Extorsin_10_1.png" /> Vía remota<br />'
        });

lyr_GoogleRoad_0.setVisible(false);lyr_Positron_1.setVisible(true);lyr_Sectores_2.setVisible(false);lyr_Alcaldas_3.setVisible(true);lyr_Clustersde1km_4.setVisible(true);lyr_Denunciadehechos_5.setVisible(false);lyr_Cobranzailegtima_6.setVisible(false);lyr_Fraude_7.setVisible(false);lyr_Amenazas_8.setVisible(false);lyr_Tentativadeextorsin_9.setVisible(false);lyr_Extorsin_10.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_Sectores_2,lyr_Alcaldas_3,lyr_Clustersde1km_4,lyr_Denunciadehechos_5,lyr_Cobranzailegtima_6,lyr_Fraude_7,lyr_Amenazas_8,lyr_Tentativadeextorsin_9,lyr_Extorsin_10];
lyr_Sectores_2.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegacion': 'delegacion', 'zona': 'zona', 'cve_zona': 'cve_zona', 'consec_reg': 'consec_reg', 'consec_sec': 'consec_sec', 'nombre_sec': 'nombre_sec', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_alcaldi': 'id_alcaldi', 'nomgeo': 'nomgeo', });
lyr_Alcaldas_3.set('fieldAliases', {'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'pobl': 'pobl', });
lyr_Clustersde1km_4.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'carpetas': 'carpetas', });
lyr_Denunciadehechos_5.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'carpeta_in', 'fecha_inic': 'fecha_inic', 'hora_inici': 'hora_inici', 'fecha_hech': 'fecha_hech', 'hora_hecho': 'hora_hecho', 'exordio': 'exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'alcaldia_h': 'alcaldia_h', 'ct_hechos': 'ct_hechos', 'colonia_he': 'colonia_he', 'lat': 'lat', 'lon': 'lon', 'anio': 'anio', 'mes': 'mes', 'tipo2': 'tipo2', });
lyr_Cobranzailegtima_6.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'Delito', 'alcaldia_h': 'Alcaldía', 'ct_hechos': 'ct_hechos', 'colonia_he': 'colonia', 'lat': 'lat', 'lon': 'lon', 'anio': 'anio', 'mes': 'mes', 'tipo2': 'Tipo', });
lyr_Fraude_7.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'Delito', 'alcaldia_h': 'Alcaldía', 'ct_hechos': 'ct_hechos', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'anio': 'anio', 'mes': 'mes', 'tipo2': 'Tipo', });
lyr_Amenazas_8.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'Delito', 'alcaldia_h': 'Alcaldía', 'ct_hechos': 'ct_hechos', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'anio': 'anio', 'mes': 'mes', 'tipo2': 'Tipo', });
lyr_Tentativadeextorsin_9.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'Delito', 'alcaldia_h': 'Alcaldía', 'ct_hechos': 'ct_hechos', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'anio': 'anio', 'mes': 'mes', 'tipo2': 'Tipo', });
lyr_Extorsin_10.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'Delito', 'alcaldia_h': 'Alcaldía', 'ct_hechos': 'ct_hechos', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'anio': 'anio', 'mes': 'mes', 'tipo2': 'Tipo', });
lyr_Sectores_2.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'delegacion': 'TextEdit', 'zona': 'TextEdit', 'cve_zona': 'TextEdit', 'consec_reg': 'TextEdit', 'consec_sec': 'TextEdit', 'nombre_sec': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_alcaldi': 'TextEdit', 'nomgeo': 'TextEdit', });
lyr_Alcaldas_3.set('fieldImages', {'id': 'Range', 'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'cve_ent': 'Range', 'cvegeo': 'Range', 'pobl': 'TextEdit', });
lyr_Clustersde1km_4.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'carpetas': 'TextEdit', });
lyr_Denunciadehechos_5.set('fieldImages', {'id_ci': '', 'carpeta_in': '', 'fecha_inic': '', 'hora_inici': '', 'fecha_hech': '', 'hora_hecho': '', 'exordio': '', 'categoria_': '', 'delito': '', 'alcaldia_h': '', 'ct_hechos': '', 'colonia_he': '', 'lat': '', 'lon': '', 'anio': '', 'mes': '', 'tipo2': '', });
lyr_Cobranzailegtima_6.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'anio': 'TextEdit', 'mes': 'TextEdit', 'tipo2': 'TextEdit', });
lyr_Fraude_7.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'anio': 'TextEdit', 'mes': 'TextEdit', 'tipo2': 'TextEdit', });
lyr_Amenazas_8.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'anio': 'TextEdit', 'mes': 'TextEdit', 'tipo2': 'TextEdit', });
lyr_Tentativadeextorsin_9.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'anio': 'TextEdit', 'mes': 'TextEdit', 'tipo2': 'TextEdit', });
lyr_Extorsin_10.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'alcaldia_h': 'TextEdit', 'ct_hechos': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'anio': 'TextEdit', 'mes': 'TextEdit', 'tipo2': 'TextEdit', });
lyr_Sectores_2.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegacion': 'no label', 'zona': 'no label', 'cve_zona': 'no label', 'consec_reg': 'no label', 'consec_sec': 'no label', 'nombre_sec': 'no label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_alcaldi': 'no label', 'nomgeo': 'no label', });
lyr_Alcaldas_3.set('fieldLabels', {'id': 'no label', 'nomgeo': 'no label', 'cve_mun': 'no label', 'cve_ent': 'no label', 'cvegeo': 'no label', 'pobl': 'no label', });
lyr_Clustersde1km_4.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'carpetas': 'inline label - always visible', });
lyr_Denunciadehechos_5.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'inline label - always visible', 'alcaldia_h': 'inline label - always visible', 'ct_hechos': 'hidden field', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'anio': 'hidden field', 'mes': 'hidden field', 'tipo2': 'inline label - always visible', });
lyr_Cobranzailegtima_6.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'inline label - always visible', 'alcaldia_h': 'inline label - always visible', 'ct_hechos': 'hidden field', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'anio': 'hidden field', 'mes': 'hidden field', 'tipo2': 'inline label - always visible', });
lyr_Fraude_7.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'inline label - always visible', 'alcaldia_h': 'inline label - always visible', 'ct_hechos': 'hidden field', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'anio': 'hidden field', 'mes': 'hidden field', 'tipo2': 'inline label - always visible', });
lyr_Amenazas_8.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'hidden field', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'inline label - always visible', 'alcaldia_h': 'inline label - always visible', 'ct_hechos': 'hidden field', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'anio': 'hidden field', 'mes': 'hidden field', 'tipo2': 'inline label - always visible', });
lyr_Tentativadeextorsin_9.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'inline label - always visible', 'alcaldia_h': 'inline label - always visible', 'ct_hechos': 'hidden field', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'anio': 'hidden field', 'mes': 'hidden field', 'tipo2': 'inline label - always visible', });
lyr_Extorsin_10.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'inline label - always visible', 'alcaldia_h': 'inline label - always visible', 'ct_hechos': 'hidden field', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'anio': 'hidden field', 'mes': 'hidden field', 'tipo2': 'inline label - always visible', });
lyr_Extorsin_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});