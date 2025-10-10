// Script para integrar AGREGAR ERGO con nuevos endpoints API
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
            vo2max: null,
            vo2max_absoluto: null,
            vco2max: null,
            ventilacion_maxima: null,
            fc_maxima: null,
            fc_reposo: null,
            fc_umbral_ventilatorio_1: null,
            fc_umbral_ventilatorio_2: null,
            vel_umbral_ventilatorio_1: null,
            vel_umbral_ventilatorio_2: null,
            potencia_maxima: null,
            potencia_umbral: null,
            cociente_respiratorio_max: null,
            equivalente_ventilatorio_o2: null,
            equivalente_ventilatorio_co2: null,
            datos_mediciones: {},
            conclusiones: '',
            recomendaciones_entrenamiento: '',
            zonas_entrenamiento: {},
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
        
        // Recopilar datos del formulario (usar los IDs correctos según el HTML)
        formData.vo2max = parseFloat($('#reportsfolder-txtVO2max').val()) || null;
        formData.vo2max_absoluto = parseFloat($('#reportsfolder-txtVO2maxAbsoluto').val()) || null;
        formData.vco2max = parseFloat($('#reportsfolder-txtVCO2max').val()) || null;
        formData.ventilacion_maxima = parseFloat($('#reportsfolder-txtVentilacionMax').val()) || null;
        
        formData.fc_maxima = parseInt($('#reportsfolder-txtFCmax').val()) || null;
        formData.fc_reposo = parseInt($('#reportsfolder-txtFCreposo').val()) || null;
        formData.fc_umbral_ventilatorio_1 = parseInt($('#reportsfolder-txtFCVT1').val()) || null;
        formData.fc_umbral_ventilatorio_2 = parseInt($('#reportsfolder-txtFCVT2').val()) || null;
        
        formData.vel_umbral_ventilatorio_1 = $('#reportsfolder-txtVelVT1').val() || null;
        formData.vel_umbral_ventilatorio_2 = $('#reportsfolder-txtVelVT2').val() || null;
        
        formData.potencia_maxima = parseInt($('#reportsfolder-txtPotenciaMax').val()) || null;
        formData.potencia_umbral = parseInt($('#reportsfolder-txtPotenciaUmbral').val()) || null;
        
        formData.cociente_respiratorio_max = parseFloat($('#reportsfolder-txtRER').val()) || null;
        formData.equivalente_ventilatorio_o2 = parseFloat($('#reportsfolder-txtEqO2').val()) || null;
        formData.equivalente_ventilatorio_co2 = parseFloat($('#reportsfolder-txtEqCO2').val()) || null;
        
        formData.conclusiones = $('#reportsfolder-txtConclusiones').val() || '';
        formData.recomendaciones_entrenamiento = $('#reportsfolder-txtRecomendaciones').val() || '';
        formData.notas = $('#reportsfolder-txtNotas').val() || '';
        
        try {
            const response = await fetch('/api/informes/ergo', {
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
                    text: "Informe ergoespirométrico creado correctamente",
                    icon: "success",
                    buttons: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = `ERGOESPIROMETRICO.html?id=${data.informe_id}`;
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
