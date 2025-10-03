$(".divDeporte").hide();
$(".filtro-competiciones").hide();
$(".filtro-programadas").hide();
$('#btn-clean').prop("disabled", true);;
$(".filtro").show();

banderaReporte = 1; //1 = ACTIVIDADES RECIBIDAS 	|| 	2 = ACTIVIDADES PROGRAMADAS
function selecciona(_opt) {
    banderaReporte = _opt;
    if (_opt == 1) {
        $('.btn-excelcompeticiones').hide();
        $('.btn-pdfcompeticiones').hide();

        $(".divDeporteText").show();
        $(".divDeporte").hide();
        $(".tblRecibidos").show();
        $("#spanPaginacion").show();
        $("#spanTotalRecords").show();
        $("#spanPaginacionProgramadas").hide();
        $("#spanPaginacionCompeticiones").hide();
        $("#spanTotalRecordsCompeticiones").hide();
        $("#spanTotalRecordsProgramadas").hide();
        $('#text-fechaI').text('Fecha Inicial');
        $(".filtro-programadas").hide();
        $(".filtro-competiciones").hide();
        $(".filtro").show();
        $('#print_btn').hide();
        $('.tblCompeticiones').hide();
    } else if (_opt == 3) {
        console.log($('#trResultsCompeticiones').html().length,'length')
        if($('#trResultsCompeticiones').html().length > 25) {
            $('.btn-excelcompeticiones').show();
            $('.btn-pdfcompeticiones').show();
        }else{
            $('.btn-excelcompeticiones').hide();
            $('.btn-pdfcompeticiones').hide();
        }
        
        //competiciones
        $(".divDeporteText").hide();
        $(".divDeporte").hide();
        $(".tblRecibidos").hide();
        $("#spanPaginacion").hide();
        $("#spanTotalRecords").hide();
        $("#spanPaginacionProgramadas").hide();
        $("#spanTotalRecordsCompeticiones").show();
        $("#spanPaginacionCompeticiones").show();

        $("#spanTotalRecordsProgramadas").hide();
        $('#text-fechaI').text('Fecha Inicial');
        $(".filtro-programadas").hide();
        $(".filtro").hide();
        $(".filtro-competiciones").show();
        $('.tblCompeticiones').show();
    } else {
        $('.btn-excelcompeticiones').hide();
        $('.btn-pdfcompeticiones').hide();

        $(".divDeporteText").hide();
        $(".divDeporte").show();
        $(".tblRecibidos").hide();
        $("#spanPaginacion").hide();
        $("#spanTotalRecords").hide();
        $("#spanPaginacionProgramadas").show();
        $("#spanTotalRecordsProgramadas").show();
        $('#spanTotalRecordsProgramadas').text(0);
        $("#spanPaginacionCompeticiones").hide();
        $("#spanTotalRecordsCompeticiones").hide();
        $('#text-fechaI').text('Fecha');
        $(".filtro").hide();
        $(".filtro-competiciones").hide();
        $(".filtro-programadas").show();
        $('.tblCompeticiones').hide();
    }
}

function eliminarActividad(actividadID) {
    alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro',
        function() {
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=site/deleteactividad",
                data: {
                    "actividadID": actividadID
                },
                success: function(data) {
                    if (data == "Exito") {
                        swal("Registro eliminado!", "", {
                            icon: "success",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                        $("#trID" + actividadID).remove();
                    } else {
                        swal("Error al eliminar!", "", {
                            icon: "error",
                            buttons: {
                                confirm: {
                                    className: 'btn btn-warning'
                                }
                            },
                        });
                    }
                },
                error: function(data) {},
            });
        },
        function() {

        });
}

function confirmDelete(key, token) {

    alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro',
        function() {
            $.ajax({
                type: 'get',
                url: "/web/index.php?r=site/deletependiente",
                data: {
                    "id": key,
                    "token": token
                },
                success: function(data) {
                    console.log(data);
                    window.location.reload();
                },
                error: function(data) {},
            });


        },

        function() {

        });

}

$('.pend_check').change(function() {
    console.log($(this).val());
    let select = 0;
    if ($(this).prop('checked')) {
        //alert('Seleccionado');
        select = 1;
    }
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=site/updatependiente",
        data: {
            "id": $(this).val(),
            "select": select,
        },
        success: function(data) {
            console.log(data);
            window.location.reload();
        },
        error: function(data) {},
    });
});
$('#right_date').click(function() {
    var url = window.location.href;
    url = url.split('?');
    url = url[0];
    month = Number(9) + 1;
    if (month < 10) {
        month = '0' + month;
    }
    if (url.indexOf('?') > -1) {
        url += '&param=' + month;
    } else {
        url += '?param=' + month;
    }
    window.location.href = url;
});
$('#left_date').click(function() {
    var url = window.location.href;
    url = url.split('?');
    url = url[0];
    month = Number(9) - 1;

    if (month < 10) {
        month = '0' + month;
    }
    if (url.indexOf('?') > -1) {
        url += '&param=' + month;
    } else {
        url += '?param=' + month;
    }
    window.location.href = url;
});
$('#add_loc').click(function() {
    $('#exampleModal1').modal('show');
});
$('#add_datainfo').click(function() {
    $('#exampleModal2').modal('show');
});
$('#add_pend').click(function() {
    $('#exampleModal3').modal('show');
});
$('.update_pend').click(function() {
    $('#exampleModal4').modal('show');
    id = $(this).data('id');
    let name = $('#name_edit' + id).val();
    let date = $('#date_edit' + id).val();
    $('#id_edit').val(id);
    $('#name_edit').val(name);
    $('#date_edit').val(date);

});
$('#add_ubi').click(function() {
    let nombre = $('#nombre').val();
    let latitud = $('#latitud').val();
    let longitud = $('#longitud').val();

    $.ajax({
        type: 'get',
        url: "/web/index.php?r=site/saveubicacion",
        data: {
            "nombre": nombre,
            "latitud": latitud,
            "longitud": longitud,
        },
        success: function(data) {
            console.log(data);
            window.location.reload();
        },
        error: function(data) {},
    });
});
$('.delete_pendiente').click(function() {
    id = $(this).data('id');
    swal({
            title: "¿Eliminar pendiente?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Espere un momento. Cargando..", {
                    buttons: false,
                    timer: 2000,
                });
                $.ajax({
                    type: 'get',
                    url: "/web/index.php?r=site/deletependiente",
                    data: {
                        "id": id,
                    },
                    success: function(data) {
                        console.log(data);
                        window.location.reload();
                    },
                    error: function(data) {},
                });
            } else {
                swal("El registro no se elimino");
            }
        });


});
$('#update_pendiente').click(function() {
    let id = $('#id_edit').val();
    let name = $('#name_edit').val();
    let date = $('#date_edit').val();
    let cadena = '';
    let error = 0;
    if (date.trim() == "") {
        cadena += "Debe escoger una fecha\n";
        error += 1;
    }
    if (name.trim() == "") {
        cadena += "Debe escribir el pendiente a realizar\n";
        error += 1;
    }
    if (error == 0) {
        swal("Espere un momento. Cargando..", {
            buttons: false,
            timer: 2000,
        });
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/updatependiente2",
            data: {
                "id": id,
                "name": name,
                "date": date,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
        });
    } else {
        swal("Campos requeridos!", cadena, {
            icon: "warning",
            buttons: {
                confirm: {
                    className: 'btn btn-warning'
                }
            },
        });
    }

});
$('#add_pendiente').click(function() {
    let name = $('#name').val();
    let date = $('#date').val();
    let cadena = '';
    let error = 0;
    if (date.trim() == "") {
        cadena += "Debe escoger una fecha\n";
        error += 1;
    }
    if (name.trim() == "") {
        cadena += "Debe escribir el pendiente a realizar\n";
        error += 1;
    }
    if (error == 0) {
        swal("Espere un momento. Cargando..", {
            buttons: false,
            timer: 2000,
        });
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/savependiente",
            data: {
                "name": name,
                "date": date,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
        });
    } else {
        swal("Campos requeridos!", cadena, {
            icon: "warning",
            buttons: {
                confirm: {
                    className: 'btn btn-warning'
                }
            },
        });
    }

});


$('#add_data').click(function() {
    let id = '26';
    let paises = $('#paises').val();
    let estados = $('#estados').val();
    let kms = $('#kms').val();

    $.ajax({
        type: 'get',
        url: "/web/index.php?r=site/savedata",
        data: {
            "id": id,
            "paises": paises,
            "estados": estados,
            "kms": kms,
        },
        success: function(data) {
            console.log(data);
            window.location.reload();
        },
        error: function(data) {},
    });
});

var map = L.map('map').
setView([29.108599233573933, -95.95890816533367], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="#">AIYM</a> AIYM socios',
    maxZoom: 16,
}).addTo(map);
L.control.scale().addTo(map);
map.setZoom(4);
map.on('popupopen', function(e) {
    e.popup.highlight = L.circleMarker(e.popup.getLatLng(), {
        radius: 15,
        opacity: 0,
        fillColor: "#000000",
        fillOpacity: .3
    }).addTo(map);

});
map.on('popupclose', function(e) {
    map.removeLayer(e.popup.highlight);

});

var layers = [];
var baselayers = {};



var blueIcon = new L.Icon({
    iconUrl: 'https://app.allinyourmind.es/web/require/marker/marker-icon-blue.png',
    shadowUrl: 'https://app.allinyourmind.es/web/require/marker/sombra_marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

console.log(-87.943791496875);
var marker1212 = L.marker([15.501905309650002, -87.943791496875], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>AIYM HONDURAS").openPopup();
marker1212.bindPopup("<br>AIYM HONDURAS");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-5.972061406242306);
var marker1212 = L.marker([37.386559021646136, -5.972061406242306], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>AIYM SEVILLA (ESP)").openPopup();
marker1212.bindPopup("<br>AIYM SEVILLA (ESP)");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-0.10179295362650276);
var marker1212 = L.marker([38.57693948004331, -0.10179295362650276], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>AIYM ALFÁS DEL PI").openPopup();
marker1212.bindPopup("<br>AIYM ALFÁS DEL PI");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-88.0042163015625);
var marker1212 = L.marker([15.496611910482272, -88.0042163015625], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>HONDURAS").openPopup();
marker1212.bindPopup("<br>HONDURAS");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-101.67944823515624);
var marker1212 = L.marker([21.118372427767056, -101.67944823515624], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>LEÓN").openPopup();
marker1212.bindPopup("<br>LEÓN");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-101.69407207345607);
var marker1212 = L.marker([21.16747503563404, -101.69407207345607], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Leon").openPopup();
marker1212.bindPopup("<br>Leon");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-1.0887766943025667);
var marker1212 = L.marker([38.86417536306884, -1.0887766943025667], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Almansa").openPopup();
marker1212.bindPopup("<br>Almansa");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-101.699934081895);
var marker1212 = L.marker([21.178313714305396, -101.699934081895], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Leon").openPopup();
marker1212.bindPopup("<br>Leon");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-99.14786767668787);
var marker1212 = L.marker([19.468961982250384, -99.14786767668787], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>CMDX").openPopup();
marker1212.bindPopup("<br>CMDX");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-1.0862563991532692);
var marker1212 = L.marker([38.875581147161526, -1.0862563991532692], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Almansa").openPopup();
marker1212.bindPopup("<br>Almansa");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-99.17548206758708);
var marker1212 = L.marker([19.58206678694643, -99.17548206758708], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>CDMX Polanco").openPopup();
marker1212.bindPopup("<br>CDMX Polanco");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(2.250299182412916);
var marker1212 = L.marker([41.394547002944236, 2.250299182412916], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>BARCELONA MAR").openPopup();
marker1212.bindPopup("<br>BARCELONA MAR");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-5.981361614461329);
var marker1212 = L.marker([37.37990527259824, -5.981361614461329], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Sevilla").openPopup();
marker1212.bindPopup("<br>Sevilla");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-0.5166149139404297);
var marker1212 = L.marker([39.07441052863363, -0.5166149139404297], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>VG Training Squad").openPopup();
marker1212.bindPopup("<br>VG Training Squad");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.6948474972414647);
var marker1212 = L.marker([40.46085236623379, -3.6948474972414647], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Madrid").openPopup();
marker1212.bindPopup("<br>Madrid");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.7088481256663286);
var marker1212 = L.marker([40.60755292768381, -3.7088481256663286], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Sede Tricantina").openPopup();
marker1212.bindPopup("<br>Sede Tricantina");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.8720136069807687);
var marker1212 = L.marker([40.322555198987956, -3.8720136069807687], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Casa").openPopup();
marker1212.bindPopup("<br>Casa");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-2.4392538785980555);
var marker1212 = L.marker([42.41984538361533, -2.4392538785980555], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>LOGROÑO").openPopup();
marker1212.bindPopup("<br>LOGROÑO");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.6222428324215983);
var marker1212 = L.marker([40.56161432836043, -3.6222428324215983], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>San Sebastian de los Reyes").openPopup();
marker1212.bindPopup("<br>San Sebastian de los Reyes");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.5872772634137062);
var marker1212 = L.marker([37.12103886343926, -3.5872772634137062], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Mi Ubicación").openPopup();
marker1212.bindPopup("<br>Mi Ubicación");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.4918871999999945);
var marker1212 = L.marker([39.10069267966064, -3.4918871999999945], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>iñaki").openPopup();
marker1212.bindPopup("<br>iñaki");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.0100924095440518);
var marker1212 = L.marker([43.335663010185, -3.0100924095440518], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Getxo").openPopup();
marker1212.bindPopup("<br>Getxo");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-1.2265761101818784);
var marker1212 = L.marker([37.97021880548774, -1.2265761101818784], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Pepe RN").openPopup();
marker1212.bindPopup("<br>Pepe RN");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-4.6496606517915335);
var marker1212 = L.marker([37.99495506341999, -4.6496606517915335], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Jaen").openPopup();
marker1212.bindPopup("<br>Jaen");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-5.573006808372365);
var marker1212 = L.marker([42.646539449189454, -5.573006808372365], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Leon").openPopup();
marker1212.bindPopup("<br>Leon");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.010938913171106);
var marker1212 = L.marker([43.3103885644718, -3.010938913171106], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>PORTUGALETE(BILBAO)").openPopup();
marker1212.bindPopup("<br>PORTUGALETE(BILBAO)");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-0.7532736430726783);
var marker1212 = L.marker([38.877186500837254, -0.7532736430726783], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>GUERRER DE MOIXENT").openPopup();
marker1212.bindPopup("<br>GUERRER DE MOIXENT");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-96.10059981147153);
var marker1212 = L.marker([19.101098691881376, -96.10059981147153], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>VERACRUZ").openPopup();
marker1212.bindPopup("<br>VERACRUZ");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-16.312932121874994);
var marker1212 = L.marker([28.454732260643475, -16.312932121874994], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Tenerife España").openPopup();
marker1212.bindPopup("<br>Tenerife España");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-91.78950791567846);
var marker1212 = L.marker([18.65076142938692, -91.78950791567846], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Isla de Tris").openPopup();
marker1212.bindPopup("<br>Isla de Tris");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-96.09634510003983);
var marker1212 = L.marker([19.087344163491583, -96.09634510003983], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Veracruz").openPopup();
marker1212.bindPopup("<br>Veracruz");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-3.2564146693292817);
var marker1212 = L.marker([42.21214727186062, -3.2564146693292817], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>Pamplona").openPopup();
marker1212.bindPopup("<br>Pamplona");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-86.81864951794081);
var marker1212 = L.marker([21.16234132374795, -86.81864951794081], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>CANCÚN").openPopup();
marker1212.bindPopup("<br>CANCÚN");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-86.8443867945704);
var marker1212 = L.marker([21.11973310816566, -86.8443867945704], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>cancun").openPopup();
marker1212.bindPopup("<br>cancun");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-87.61896020573303);
var marker1212 = L.marker([41.88912088288811, -87.61896020573303], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>AIYM CHICAGO").openPopup();
marker1212.bindPopup("<br>AIYM CHICAGO");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });
console.log(-90.51028602437903);
var marker1212 = L.marker([19.853745823077602, -90.51028602437903], {
    icon: blueIcon
}).addTo(map);
//marker1212.bindPopup("<br>AIYM CAMPECHE").openPopup();
marker1212.bindPopup("<br>AIYM CAMPECHE");
	
  // Mostrar el popup al pasar el mouse sobre el marcador
  marker1212.on('mouseover', function(e) {
    this.openPopup();
  });

  // Ocultar el popup al sacar el mouse del marcador
  marker1212.on('mouseout', function(e) {
    this.closePopup();
  });

  // 
  marker1212.on('click', function(e) {
	  console.log("EEEE", e);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let titulo = e.content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
		});
	}
  });

map.on('click', function(e) {
	//alert(2);
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    $('#latitud').val(lat);
    $('#longitud').val(lng);
    $('#exampleModal1').modal('show');

});
map.on('popupopen', function(e) {
	return;
    let text;
    let lat = e.popup._latlng.lat;
    let lng = e.popup._latlng.lng;
    let titulo = e.popup._content;

    if (confirm("¿Desea eliminar la ubicación seleccionada?") == true) {
        $.ajax({
            type: 'get',
            url: "/web/index.php?r=site/deletelocation",
            data: {
                "titulo": titulo,
                "lat": lat,
                "lng": lng,
            },
            success: function(data) {
                console.log(data);
                window.location.reload();
            },
            error: function(data) {},
        });
        text = "You pressed OK!";

    } else {
        text = "You canceled!";
    }
    console.log(text);
    console.log(e.popup._content);
    console.log(e.popup._latlng);
});

$(document).ready(function() {
    $('#basic-datatables').DataTable({});

    $('#multi-filter-select').DataTable({
        "pageLength": 5,
        initComplete: function() {
            this.api().columns().every(function() {
                var column = this;
                var select = $(
                        '<select class="form-control"><option value=""></option></select>')
                    .appendTo($(column.footer()).empty())
                    .on('change', function() {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function(d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });
            });
        }
    });

    // Add Row
    $('#add-row').DataTable({
        "pageLength": 5,
    });

    var action =
        '<td> <div class="form-button-action"> <button type="button" data-toggle="tooltip" title="" class="btn btn-link btn-primary btn-lg" data-original-title="Edit Task"> <i class="fa fa-edit"></i> </button> <button type="button" data-toggle="tooltip" title="" class="btn btn-link btn-danger" data-original-title="Remove"> <i class="fa fa-times"></i> </button> </div> </td>';

    $('#addRowButton').click(function() {
        $('#add-row').dataTable().fnAddData([
            $("#addName").val(),
            $("#addPosition").val(),
            $("#addOffice").val(),
            action
        ]);
        $('#addRowModal').modal('hide');

    });


});
$('.btn-excelcompeticiones').hide();
$('.btn-pdfcompeticiones').hide();

$('#print_btn').hide();
$('#cmbDeporte').change(function() {
    switch ($(this).val()) {
        case "1":
            options =
                '<option value="w">Watts</option>' +
                '<option value="km/h">Km/h</option>';
            break;
        case "2":
            options =
                '<option value="100">Lap 100</option>';
            break;
        case "3":
            options =
                '<option value="100">Lap 100</option>' +
                '<option value="400">Lap 400</option>' +
                '<option value="min/km">Min/km</option>';
            break;
        default:
            options =
                '<option value="100">Lap 100</option>' +
                '<option value="400">Lap 400</option>' +
                '<option value="w">Watts</option>' +
                '<option value="min/km">Min/km</option>' +
                '<option value="km/h">Km/h</option>';
            break;
    }
    console.log(options);
    $('#referencia1_sesion').empty();
    $('#referencia1_sesion').append(options);
    $('#referencia2_sesion').empty();
    $('#referencia2_sesion').append(options);
});
$('.referencia_sesion').change(function() {
    $('.referencias_select').change();

});
$('.label-referencia').click(function() {
    let option = $(this).data('option');
    let asc = $(this).data('asc');

    console.log($(this).data('option'));
    let array_sort = [];
    $('.tr_item_sesion').each(function() {
        let atleta = $(this).data('atleta');
        let sesion = $(this).data('sesion');
        let zona = $(this).data('zona');

        if (option === 1) {
            value = $(this).data('value1');
        } else {
            value = $(this).data('value2');
        }

        let value1 = $(this).data('value1');
        let value2 = $(this).data('value2');
        console.log(value1, value2, value);
        let referencia1 = $(this).data('referencia1');
        let referencia2 = $(this).data('referencia2');
        array_sort.push({
            'sesion': sesion,
            'zona': zona,
            'atleta': atleta,
            'value1': value1,
            'value2': value2,
            //'value': value.replace(':', '.')
            'value': value
        });
        console.log(atleta, sesion, zona, value);
    })
    if (asc == 0) {
        array_sort.sort((a, b) => a.value - b.value);
        $(this).data('asc', 1);
    } else {
        array_sort.sort((a, b) => b.value - a.value);
        $(this).data('asc', 0);
    }

    let html = '';
    let atleta_flag = '';
    array_sort.forEach(item => {
        //if (atleta_flag != item.atleta) {
            html += '<div class="col-md-4" id="tr_item_atleta_sesion_' + item.sesion + '">' + $('#tr_item_atleta_sesion_' + item.sesion)
                .html() + '</div>';
            atleta_flag = item.atleta;
        //}
        console.log(item);
    });
    $('#trResultsProgramadas').empty();
    $('#trResultsProgramadas').append(html);
    console.log(html);
    console.log(array_sort);
    $('.tr_item_sesion').each(function() {
        let zona = $(this).data('zona');
        let sesion = $(this).data('sesion');
        $('#zona_sesion_' + sesion).val(zona);
    });
})
$("#txtAtleta").on('keypress', function(e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
        filtro_buscar('', '1');
        return false;
    }
});

$('#print').click(function() {
    //window.print();
    swal("Espere un momento. Cargando..", {
        buttons: false,
        timer: 2000,
    });
    let fi = $('#txtFechaI').val();
    html2canvas($("#results-div")[0]).then((canvas) => {
        console.log("done ... ");
        canvas.toBlob((blob) => {
            saveAs(blob, 'programadas_' + fi)
        })

    });
})

function saveAs(blob, fileName = "pic") {
    const link = document.createElement('a');
    link.download = fileName
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}
var arr_atletas = [];

function filtro_buscar(limite, pg) {
    let fi = $('#txtFechaI').val();
    let ff = $('#txtFechaF').val();
    let referencia1 = $('#referencia1_sesion').val();
    let referencia2 = $('#referencia2_sesion').val();
    let atl = $('#txtAtleta').val();
    let filial = $('#txtFilial').val();
    let competicion = $('#txtCompeticion').val();
    let dep = 0;
    let deporteText = "";
    if (banderaReporte == 2) { //ACTIVIDADES PROGRAMADAS
        dep = $('#cmbDeporte').val();
    } else if (banderaReporte == 3) {
        //competiciones
    } else {
        deporteText = $('#txtDeporte').val();
    }
    swal("Espere un momento. Cargando..", {
        buttons: false,
        timer: 1000,
    });
    $.ajax({
        type: 'get',
        url: "/web/index.php?r=site/filtrogarmin",
        data: {
            fi: fi,
            ff: ff,
            atl: atl,
            pg: pg,
            limite: limite,
            deporte: dep,
            deporteText: deporteText,
            referencia1: referencia1,
            referencia2: referencia2,
            competicion: competicion,
            filial: filial,
            opcionReporte: banderaReporte
        },
        success: function(data) {
            $('.btn-excelcompeticiones').hide();
            let arData = data.split("||||");
            //console.log("resp: ", data);
            if (banderaReporte == 1) {
                $("#trResults").html(arData[0]);
                $("#spanPaginacion").html(arData[1]);
                $("#spanTotalRecords").html(arData[2]);
            } else if (banderaReporte == 2) {

                data = JSON.parse(data);
                $.each(data, function(i, item) {
                    if (!arr_atletas.includes(item.atleta.id)) {
                       

                        let temp_id_sesion = 0;
                        $.each(item.sesiones, function(j, sesion) {
                            if (temp_id_sesion !== sesion.ssID) {
                                temp_id_sesion = sesion.ssID;
                                $.ajax({
                                    type: 'get',
                                    async: false,
                                    url: "/web/index.php?r=progressionsprogression/getdata",
                                    data: {
                                        "id": sesion.ssID,
                                        "week": 1,
                                        "day": item.day,
                                        "columnas": 12,
                                        "perfilID": item.atleta.id,
                                        "idorgn": '0',
                                        "cporgn": '0',
                                        "origen": 'MESO',
                                        "perfilSelectedID": item.atleta.id,
                                        "perfilSelectedactivo": item.atleta.id,
                                    },
                                    success: function(data) {

                                        console.log(sesion.sport_id);
                                        let html = '';

                                        let id = sesion.ssID;
                                        let date =
                                            '<div class="d-none">' +
                                                '<input type="date" value="' + item.date + '" class="form-control" id="date_sesion_' + id + '">' +
                                            '</div>';
                                        let select_zonas =
                                            '<div class="col-md-6">' +
                                                '<label id=" " style="margin-left:-6px">Zona:</label>' +
                                                '<select style="margin-left:-6px" class="form-control referencias_select" onChange="referencias(' +
                                                sesion.ssID + ',' + item.atleta.id +
                                                ')" id="zona_sesion_' +
                                                id + '">' +
                                                '<option value="">--</option>' +
                                                '<option value="1">Zona 1</option>' +
                                                '<option value="2">Zona 2</option>' +
                                                '<option value="3">Zona 3</option>' +
                                                '<option value="4">Zona 4</option>' +
                                                '<option value="5">Zona 5</option>' +
                                                '<option value="6">Zona 6</option>' +
                                                '<option value="7">Zona 7</option>' +
                                                '<option value="8">Zona 8</option>' +
                                                '<option value="9">Zona 9</option>' +
                                                '<option value="10">Zona 10</option>' +
                                                '</select>' +
                                                
                                                '<div class="" id="tr_item_sesion_referencia_div_' + sesion.ssID + '">' +
                                                '</div>' +
                                            '</div>';

                                        html += '<div class="col-md-4" id="tr_item_atleta_sesion_' + sesion.ssID + '">' +
                                                    '<div class="row" style="padding:30px">' +
                                                        '<div class="col-md-10">' +
                                                            item.atleta.first_name + ' ' + item.atleta.last_name +
                                                        '</div>' +
                                                        '<div class="col-md-1">' +
                                                            '<button type="button" class="btn bg-white" style="margin-top:-10px" onClick="removeAtletaSesion(' +
                                                            sesion.ssID + ','+item.atleta.id+')">X</button>' +
                                                        '</div>' +
                                                    '</div>';

                                        html +=     '<div id="tr_item_sesion_' + sesion.ssID + '" class="row tr_item_atleta_' + item.atleta.id + ' tr_item_sesion_' + sesion.ssID + '">' +
                                                        date + //display none, fecha
                                                        '<div class="col-md-6">' +
                                                            data +
                                                        '</div>' +
                                                        select_zonas +
                                                    '</div>';
                                                +'</div>';
                                        $('#trResultsProgramadas').append(html);
                                    },
                                    error: function(data) {
                                        swal("Error al guardar!", "" + data, {
                                            icon: "error",
                                            buttons: {
                                                confirm: {
                                                    className: 'btn btn-danger'
                                                }
                                            },
                                        });
                                    },
                                });
                            }
                        });
                        
                        if (temp_id_sesion !== 0) {
                            
                            arr_atletas.push(item.atleta.id);
                        } else {
                            /*swal("No se encontraron resultados", {
                                buttons: false,
                                timer: 3000,
                                icon: 'info'
                            });*/
                        }
                    } else {

                        console.log(data.length);
                        if (data.length > 1) {} else {
                            swal("El atleta ya se encuentra en el listado", {
                                buttons: false,
                                timer: 3000,
                                icon: 'info'
                            });
                        }
                    }


                });
                console.log(data.length);
                if (data.length === 0) {
                    swal("No se encontraron resultados", {
                        buttons: false,
                        timer: 3000,
                        icon: 'info'
                    });
                }

                //$("#trResultsProgramadas").html(arData[0]);
                //$("#spanPaginacionProgramadas").html(arData[1]);
                //$("#spanTotalRecordsProgramadas").html(arData[2]);
                if (arr_atletas.length > 0) {
                    $('#print_btn').show();
                    $('#btn-clean').prop("disabled", false);
                } else {
                    $('#print_btn').hide();
                    $('#btn-clean').prop("disabled", true);
                    swal("No se encontraron resultados", {
                        buttons: false,
                        timer: 3000,
                        icon: 'info'
                    });
                }
                $('#spanTotalRecordsProgramadas').text(arr_atletas.length);
            } else {
            if(arData[0].length > 0) {
                $('.btn-excelcompeticiones').show();
                $('.btn-pdfcompeticiones').show();
                $('.btn-excelcompeticiones').attr('href','index.php?r=site/excelcompeticiones&fi='+fi
                    +'&ff='+ff
                    +'&atl='+atl
                    +'&pg='+pg
                    +'&limite='+limite
                    +'&deporte='+dep
                    +'&deporteText='+deporteText
                    +'&referencia1='+referencia1
                    +'&referencia2='+referencia2
                    +'&competicion='+competicion
                    +'&filial='+filial
                    +'&opcionReporte='+banderaReporte
                );
                $('.btn-pdfcompeticiones').attr('href','index.php?r=site/pdfcompeticiones&fi='+fi
                    +'&ff='+ff
                    +'&atl='+atl
                    +'&pg='+pg
                    +'&limite='+limite
                    +'&deporte='+dep
                    +'&deporteText='+deporteText
                    +'&referencia1='+referencia1
                    +'&referencia2='+referencia2
                    +'&competicion='+competicion
                    +'&filial='+filial
                    +'&opcionReporte='+banderaReporte
                );
            }else{
                $('.btn-excelcompeticiones').hide();
                $('.btn-pdfcompeticiones').hide();
            }
                
                //competiciones
                console.log(data);
                $('#trResultsCompeticiones').empty();
                $('#trResultsCompeticiones').append(arData[0]);
                $("#spanPaginacionCompeticiones").html(arData[1]);
                $("#spanTotalRecordsCompeticiones").html(arData[2]);
            }

        },
        error: function(data) {
            alert(fi + ff + atl + data.responseText + '/web/index.php?r=site/filtrogarmin');
            console.log("=", data.responseText);
        },
    });

}

function referencias(id, atletaId) {
    let date = $("#date_sesion_" + id).val();
    let zona = $("#zona_sesion_" + id).val();
    /*let referencia1 = $("#referencia1_sesion_" + id).val();
    let referencia2 = $("#referencia2_sesion_" + id).val();*/
    let referencia1 = $("#referencia1_sesion").val();
    let referencia2 = $("#referencia2_sesion").val();
    let ref_text1 = $("#referencia1_sesion option:selected").text();
    let ref_text2 = $("#referencia2_sesion option:selected").text();
    let dep = $('#cmbDeporte').val();
    let dep_string = '';
    switch (dep) {
        case 1:
            dep = 'B';
            dep_string = 'CICLISMO';
            break;
        case 2:
            dep = 'N';
            dep_string = 'NATACION';
            break;
        case 3:
            dep = 'C';
            dep_string = 'CARRERA';
            break;
        default:
            dep = 'C';
            dep_string = 'CARRERA';
            break;
    }
    console.log(id, "=", date, zona, referencia1, referencia2);

    ////////////////////////////////////////////////////////////
    /////////////////////// START MB ///////////////////////////
    ////////////////////////////////////////////////////////////

    let iconoFE = dep; //c
    let series = 1;
    let repeticiones = 1;
    let minutosRepeticion = 10;
    let minutosPausa = 0;
    let minutosRecuperacion = 0;
    let kmPorHr = 16.4; //fijo
    let distancia = 1000;
    let opcionVelocidadRitmo = dep_string; //"CARRERA";
    let distTiempoMetrica = 2;
    let ultimoBloqueAgregado = "continuo";
    var _minKm = "--";
    var _min100 = "--";
    var _min400 = "--";
    let _watts = 0;
    let _km_hr = 0;
    let _mensaje = "";
    let i = 0;
    $.ajax({
        type: 'get',
        async: false,
        url: "/web/index.php?r=site/getzonas",
        data: {
            "id": atletaId,
            "zona": zona,
            "iconoFE": iconoFE,
            "series": series,
            "repeticiones": repeticiones,
            "minutosRepeticion": minutosRepeticion,
            "minutosPausa": minutosPausa,
            "minutosRecuperacion": minutosRecuperacion,
            "kmPorHr": kmPorHr,
            "distancia": distancia,
            "opcionVelocidadRitmo": opcionVelocidadRitmo,
            "distTiempoMetrica": distTiempoMetrica,
            "ultimoBloqueAgregado": ultimoBloqueAgregado
        },
        success: function(data) {
            console.log(data);
            //alert(series);
            rows = JSON.parse(data);
            console.log(rows);
            var cantTemp = 0;
            _minKm = rows[i]['min_km'];
            _watts = rows[i]['watts'];
            _min100 = rows[i]['min_100'];
            _min400 = rows[i]['min_400'];
            _km_hr = rows[i]['km_hr'];
            _mensaje = rows[i]['mensaje'];
        },
        error: function(data) {
            console.log(data);
            alert("error "  + " ->>" + data);
        },

    });
    ////////////////////////////////////////////////////////////
    ///////////////////// FIN START MB /////////////////////////
    ////////////////////////////////////////////////////////////
    $('.tr_item_sesion_referencia_' + id).remove();
    let value_referencia1 = '';
    let value_referencia2 = '';
    switch (referencia1) {
        case '100':
            value_referencia1 = _min100;
            break;
        case '400':
            value_referencia1 = _min400;
            break;
        case 'w':
            value_referencia1 = _watts;
            break;
        case 'min/km':
            value_referencia1 = _minKm;
            break;
        case 'km/h':
            value_referencia1 = _km_hr;
            break;
        default:
            value_referencia1 = _min100;
            break;
    }
    switch (referencia2) {
        case '100':
            value_referencia2 = _min100;
            break;
        case '400':
            value_referencia2 = _min400;
            break;
        case 'w':
            value_referencia2 = _watts;
            break;
        case 'min/km':
            value_referencia2 = _minKm;
            break;
        case 'km/h':
            value_referencia2 = _km_hr;
            break;
        default:
            value_referencia2 = _min100;
            break;
    }
    $('#tr_item_sesion_referencia_div_' + id).append('<div class="col tr_item_sesion tr_item_sesion_' + id +
        ' tr_item_sesion_referencia_' + id +
        '"  align="right" data-sesion="' + id + '"  data-date="' + date + '" data-atleta="' + atletaId +
        '" data-zona="' + zona + '" data-value1="' + value_referencia1 + '" data-value2="' + value_referencia2 +
        '" data-referencia1="' + referencia1 + '" data-referencia2="' + referencia2 + '" style="padding:10px;">' +
        
        '<div class="row">' + ref_text1 + ': ' + value_referencia1 + '' + '</div>' +
        '<div class="row">' + ref_text2 + ': ' + value_referencia2 + '' + '</div>' +
        '<div class="row" style="color:red;text-align:justify">' + _mensaje + '</div>' +
        '</div>');
    /*$('#tr_item_sesion_' + id).after('<div class="row tr_item_sesion_' + id + ' tr_item_sesion_referencia_' + id +
        '"  align="right" style="padding:10px;"><div class="col-md-10"></div>' +
        '<div class="col">' + id + ':--' + date + '--' + zona + '--' + referencia1 + '--' +
        referencia2 + '</div>' +
        '</div>')*/
    //alert(id+':--'+date+'--'+zona+'--'+referencia1+'--'+referencia2);
}

function deleteRef(id, atletaId) {
    $('#tr_item_sesion_' + id).remove();
    $('.tr_item_sesion_' + id).remove();
    let cont = 0;
    $.each($('.tr_item_atleta_' + atletaId), function(i, sesion) {
        cont++;
        console.log(cont);
    })
    if (cont === 0) {
        console.log('0', cont);

        $('#tr_item_atleta_' + atletaId).remove();
        $('.tr_item_atleta_' + atletaId).remove();
        arr_atletas = arr_atletas.filter(atleta => atleta != atletaId);

    }
    console.log('>0', cont);
}

function removeAtletaSesion(id,atletaId) {
    $('#tr_item_atleta_sesion_' + id).remove();
    let cont = 0;
    $.each($('.tr_item_atleta_' + atletaId), function(i, sesion) {
        cont++;
        console.log(cont);
    })
    if (cont === 0) {
        console.log('0', cont);
        arr_atletas = arr_atletas.filter(atleta => atleta != atletaId);
    }

    $('#spanTotalRecordsProgramadas').text(arr_atletas.length);
    if (arr_atletas.length > 0) {
        $('#print_btn').show();
    } else {
        $('#print_btn').hide();
    }
}

function limpiarResultados() {
    $('#trResultsProgramadas').empty();
    arr_atletas = [];
    $('#spanTotalRecordsProgramadas').text(arr_atletas.length);
}

function changeIdioma(id, flag) {
    console.log(id + "-" + flag);
    $.ajax({
        url: '/web/index.php?r=idiomas/changeidioma',
        type: "POST",
        data: "id=" + id + "&flag=" + flag,
        success: function(response) {
            location.reload();
        }
    });
}