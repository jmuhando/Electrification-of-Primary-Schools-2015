var map = L.map('map' ,{center :[-0.085091, 37.497650] , zoom : 6 });
L.control.scale().addTo(map); //scale

var style = {
    "color": "#A65300",
    "weight": 1,
    "opacity": 0.85
};

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.5
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
    
}
var geojson;
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    
}

var one;
var two;
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    $('.data-container').html(e.target.feature.properties.NAME +'&nbsp;'+'COUNTY');
    myPieChart.segments[0].value = (e.target.feature.properties.Yes);
    myPieChart.segments[1].value = (e.target.feature.properties.No);
    myPieChart.update();
    var test1= e.target.feature.properties.NAME;

    function test (schoolsdata,e) {
        var ux =[];
        for(var i = 0; i< schoolsdata.length; i++ )
             if(schoolsdata[i].COUNTY == test1)
                {
                ux.push(schoolsdata[i]);
                ux;
                $(document).ready(function() {
                    $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
 
                    var table = $('#example').dataTable( {
                     "paging":   false,
                     "bFilter":false,
                     "ordering": false,
                     "info":     false,
                     "bProcessing": true,
                     "aaData": ux,
                        "aoColumns": [
                            { "title":"CONSTITUENCY","class":"Left","mData": "CONSTITUENCY" },
                            { "title":"Connected","mData": "YES" },
                            { "title":"Not connected","mData": "NOT" },
                            { "title":"TOTAL","mData": "TOTAL"}
                            ]
                    } );      
                } );
                //console.log(ux);
                }     
    };
    test(schoolsdata);
}

function onEachFeature(feature, layer) {
    layer.on({
    	click: zoomToFeature,
    	mouseover:highlightFeature,
    	mouseout:resetHighlight 	   
    });    
}

var sidebar = L.control.sidebar('sidebar', {
            closeButton: true,
            position: 'right'
        });
        map.addControl(sidebar);

        setTimeout(function () {
            //sidebar.show();
        }, 200);
        var geojson = L.geoJson(counties,{style:style,onEachFeature:onEachFeature }).addTo(map).on('click', function () {
            sidebar.toggle();
        });

        map.on('click', function () {
            sidebar.hide();
        })
        L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
            console.log('Close button clicked.');
        });

