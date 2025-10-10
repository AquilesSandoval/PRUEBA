// Script para integrar AGREGAR LACTATO con nuevos endpoints API
$(document).ready(function() {
    // Obtener atleta_id de URL
    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = urlParams.get('atleta_id');
    
    if (athleteId) {
        console.log('Atleta ID:', athleteId);
        // Preseleccionar el atleta en el selector si existe
        if ($('#reportsfolder-athlete_id').length) {
            $('#reportsfolder-athlete_id').val(athleteId).trigger('change');
        }
    }
    
    // Interceptar el envío del formulario
    $('#w0').on('submit', async function(e) {
        e.preventDefault();
        
        // Validar que haya un atleta seleccionado
        const selectedAthleteId = $('#reportsfolder-athlete_id').val() || athleteId;
        if (!selectedAthleteId) {
            swal("Error", "Debe seleccionar un atleta", "error");
            return false;
        }
        
        // Recopilar datos del formulario
        const formData = {
            atleta_id: parseInt(selectedAthleteId),
            fecha_prueba: new Date().toISOString().split('T')[0], // Fecha actual por defecto
            deporte: '',
            protocolo_prueba: '',
            temperatura_ambiente: null,
            humedad_ambiente: null,
            umbral_aerobico_fc: null,
            umbral_aerobico_velocidad: null,
            umbral_aerobico_lactato: null,
            umbral_anaerobico_fc: null,
            umbral_anaerobico_velocidad: null,
            umbral_anaerobico_lactato: null,
            vo2max_estimado: null,
            fc_maxima_alcanzada: null,
            datos_mediciones: {},
            conclusiones: '',
            recomendaciones_entrenamiento: '',
            notas: ''
        };
        
        // Determinar deporte basado en radio buttons
        if ($('#reportsfolder-deporteID1').is(':checked')) {
            formData.deporte = 'Carrera';
        } else if ($('#reportsfolder-deporteID2').is(':checked')) {
            formData.deporte = 'Ciclismo';
        } else if ($('#reportsfolder-deporteID3').is(':checked')) {
            formData.deporte = 'Natación';
        }
        
        // Recopilar datos de las zonas (si existen los campos)
        formData.umbral_aerobico_fc = parseInt($('#reportsfolder-txtZona2FC').val()) || null;
        formData.umbral_aerobico_velocidad = $('#reportsfolder-txtZona2V').val() || null;
        formData.umbral_aerobico_lactato = parseFloat($('#reportsfolder-txtZona2LA').val()) || null;
        
        formData.umbral_anaerobico_fc = parseInt($('#reportsfolder-txtZona4FC').val()) || null;
        formData.umbral_anaerobico_velocidad = $('#reportsfolder-txtZona4V').val() || null;
        formData.umbral_anaerobico_lactato = parseFloat($('#reportsfolder-txtZona4LA').val()) || null;
        
        formData.vo2max_estimado = parseFloat($('#reportsfolder-txtVO2max').val()) || null;
        formData.fc_maxima_alcanzada = parseInt($('#reportsfolder-txtFCmax').val()) || null;
        
        // Recopilar datos de la tabla de mediciones
        const mediciones = [];
        $('#table-body tr').each(function() {
            const row = $(this);
            const medicion = {
                distancia: row.find('input[name*="[distancia]"]').val(),
                tiempo: row.find('input[name*="[tiempo]"]').val(),
                ciclo1: row.find('input[name*="[ciclo1]"]').val(),
                ciclo2: row.find('input[name*="[ciclo2]"]').val(),
                fc: row.find('input[name*="[fc]"]').val(),
                rpe: row.find('input[name*="[rpe]"]').val(),
                la: row.find('input[name*="[la]"]').val(),
                potenciaCarrera: row.find('input[name*="[potenciaCarrera]"]').val()
            };
            mediciones.push(medicion);
        });
        
        if (mediciones.length > 0) {
            formData.datos_mediciones = { mediciones: mediciones };
        }
        
        try {
            const response = await fetch('/api/informes/lactato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                swal({
                    title: "¡Éxito!",
                    text: "Informe de lactato creado correctamente",
                    icon: "success",
                    buttons: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = `INFORME LACTATO.html?id=${data.informe_id}`;
                });
            } else {
                swal("Error", data.error || "Error al crear el informe", "error");
            }
        } catch (error) {
            console.error('Error:', error);
            swal("Error", "Error de conexión al servidor", "error");
        }
        
        return false;
    });
});
