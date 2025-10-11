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
    
    // Función para agregar fila a la tabla de registro de datos
    let rowCount = 0;
    function addTableRow() {
        rowCount++;
        const row = `
            <tr id="row-${rowCount}">
                <td><input type="text" class="form-control form-control-sm col-distancia" name="medicion[${rowCount}][distancia]" placeholder="0"></td>
                <td><input type="text" class="form-control form-control-sm col-tiempo" name="medicion[${rowCount}][tiempo]" placeholder="00:00"></td>
                <td><input type="text" class="form-control form-control-sm col-ciclo1" name="medicion[${rowCount}][ciclo1]" placeholder="0.00"></td>
                <td><input type="text" class="form-control form-control-sm col-ciclo2" name="medicion[${rowCount}][ciclo2]" placeholder="0.00"></td>
                <td><input type="number" class="form-control form-control-sm col-fc" name="medicion[${rowCount}][fc]" placeholder="0"></td>
                <td><input type="number" class="form-control form-control-sm col-rpe" name="medicion[${rowCount}][rpe]" placeholder="0" min="0" max="10"></td>
                <td><input type="number" step="0.1" class="form-control form-control-sm col-la" name="medicion[${rowCount}][la]" placeholder="0.0"></td>
                <td><input type="text" class="form-control form-control-sm col-velocidad" name="medicion[${rowCount}][velocidad]" placeholder="0"></td>
                <td><input type="text" class="form-control form-control-sm col-potencia" name="medicion[${rowCount}][potencia]" placeholder="0" style="display:none;"></td>
                <td>
                    <button type="button" class="btn btn-sm btn-danger btnRemoveRow" data-row="row-${rowCount}" title="Eliminar">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        $('#table-body').append(row);
    }
    
    // Agregar al menos una fila al cargar
    addTableRow();
    
    // Evento para agregar fila
    $(document).on('click', '#btnAddRow', function(e) {
        e.preventDefault();
        addTableRow();
    });
    
    // Evento para eliminar fila
    $(document).on('click', '.btnRemoveRow', function(e) {
        e.preventDefault();
        const rowId = $(this).data('row');
        if ($('#table-body tr').length > 1) {
            $('#' + rowId).remove();
        }
    });
    
    // Función para cambiar tablas según deporte
    function updateTablesForSport(sport) {
        const $registroTable = $('#table-body').closest('table');
        const $zonasTable = $('#zonas-tbody').closest('table');
        const $thead = $registroTable.find('thead tr');
        const $zonasHead = $zonasTable.find('thead tr');
        
        // Limpiar y recrear encabezados
        if (sport === 'Carrera') {
            // Tabla Registro de datos - Carrera
            $thead.html(`
                <td width="12%">Distancia (m)</td>
                <td width="12%">Tiempo (min:ss)</td>
                <td width="12%">F. Ciclo1 (TB, ss.dd)</td>
                <td width="12%">F. Ciclo2 (TB, ss.dd)</td>
                <td width="12%">FC (ppm)</td>
                <td width="10%">RPE (0-10)</td>
                <td width="12%">LA (mMol/L)</td>
                <td width="12%">Velocidad(V)</td>
                <td width="6%">
                    <button type="button" class="btn btn-sm btn-primary" id="btnAddRow" title="Agregar fila">
                        <i class="fa fa-plus"></i>
                    </button>
                </td>
            `);
            
            // Tabla Zonas - Carrera
            $zonasHead.html(`
                <td width="15%">Zona</td>
                <td width="17%"><span id="spanZEVkmPorHr">V (Km/hr)</span> <span class="errorRojo">*</span></td>
                <td width="17%"><span id="spanTituloTiempoMinKm">Ritmo (mins/km)</span></td>
                <td width="17%">FC (ppm) <span class="errorRojo">*</span></td>
                <td width="17%">Lactato(mMol/L)</td>
                <td width="17%">Potencia(W)</td>
            `);
            
            // Mostrar/ocultar columnas en filas
            $('.col-distancia, .col-tiempo, .col-ciclo1, .col-ciclo2, .col-velocidad').parent().show();
            $('.col-potencia').parent().hide();
            $('.tdcolumnaCarrera, .dtPotenciaCarrera').show();
            
        } else if (sport === 'Ciclismo') {
            // Tabla Registro de datos - Ciclismo
            $thead.html(`
                <td width="25%">Potencia (W) (m)</td>
                <td width="25%">FC (ppm)</td>
                <td width="25%">RPE (0-10)</td>
                <td width="19%">LA (mMol/L)</td>
                <td width="6%">
                    <button type="button" class="btn btn-sm btn-primary" id="btnAddRow" title="Agregar fila">
                        <i class="fa fa-plus"></i>
                    </button>
                </td>
            `);
            
            // Tabla Zonas - Ciclismo
            $zonasHead.html(`
                <td width="25%">Zona</td>
                <td width="25%">P (w) <span class="errorRojo">*</span></td>
                <td width="25%">FC (ppm) <span class="errorRojo">*</span></td>
                <td width="25%">Lactato(mMol/L)</td>
            `);
            
            // Ocultar columnas no necesarias
            $('.col-distancia, .col-tiempo, .col-ciclo1, .col-ciclo2, .col-velocidad').parent().hide();
            $('.col-potencia').parent().show();
            $('.tdcolumnaCarrera').hide();
            $('.dtPotenciaCarrera').show();
            
        } else if (sport === 'Natación') {
            // Tabla Registro de datos - Natación
            $thead.html(`
                <td width="14%">Distancia (m)</td>
                <td width="14%">Tiempo (min:ss)</td>
                <td width="14%">F. Ciclo1 (TB, ss.dd)</td>
                <td width="14%">F. Ciclo2 (TB, ss.dd)</td>
                <td width="14%">FC (ppm)</td>
                <td width="12%">RPE (0-10)</td>
                <td width="12%">LA (mMol/L)</td>
                <td width="6%">
                    <button type="button" class="btn btn-sm btn-primary" id="btnAddRow" title="Agregar fila">
                        <i class="fa fa-plus"></i>
                    </button>
                </td>
            `);
            
            // Tabla Zonas - Natación
            $zonasHead.html(`
                <td width="20%">Zona</td>
                <td width="20%">Ritmo (min/100) <span class="errorRojo">*</span></td>
                <td width="20%">Ritmo (cms/km)</td>
                <td width="20%">FC (ppm) <span class="errorRojo">*</span></td>
                <td width="20%">Lactato(mMol/L)</td>
            `);
            
            // Mostrar/ocultar columnas
            $('.col-distancia, .col-tiempo, .col-ciclo1, .col-ciclo2').parent().show();
            $('.col-potencia, .col-velocidad').parent().hide();
            $('.tdcolumnaCarrera').show();
            $('.dtPotenciaCarrera').hide();
        }
        
        // Recrear filas con las columnas correctas
        $('#table-body').empty();
        addTableRow();
    }
    
    // Detectar cambio de deporte
    $('input[name="Reportsfolder[deporteID]"]').on('change', function() {
        const sport = $(this).data('deporte') || 
                     ($(this).is('#reportsfolder-deporteID1') ? 'Carrera' : 
                      $(this).is('#reportsfolder-deporteID2') ? 'Ciclismo' : 'Natación');
        updateTablesForSport(sport);
    });
    
    // Inicializar con Carrera por defecto
    if ($('#reportsfolder-deporteID1').is(':checked')) {
        updateTablesForSport('Carrera');
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
        
        // Recopilar datos del formulario - SOLO campos que existen en la base de datos
        const formData = {
            atleta_id: parseInt(selectedAthleteId),
            fecha_prueba: $('#reportsfolder-sporttestdate').val() || new Date().toISOString().split('T')[0],
            deporte: '',
            protocolo_prueba: '',
            umbral_aerobico_fc: null,
            umbral_aerobico_velocidad: null,
            umbral_aerobico_lactato: null,
            umbral_anaerobico_fc: null,
            umbral_anaerobico_velocidad: null,
            umbral_anaerobico_lactato: null,
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
        
        // Recopilar datos de las zonas
        formData.umbral_aerobico_fc = parseInt($('#reportsfolder-txtZona2FC').val()) || null;
        formData.umbral_aerobico_velocidad = parseFloat($('#reportsfolder-txtZona2V').val()) || null;
        formData.umbral_aerobico_lactato = parseFloat($('#reportsfolder-txtZona2LA').val()) || null;
        
        formData.umbral_anaerobico_fc = parseInt($('#reportsfolder-txtZona4FC').val()) || null;
        formData.umbral_anaerobico_velocidad = parseFloat($('#reportsfolder-txtZona4V').val()) || null;
        formData.umbral_anaerobico_lactato = parseFloat($('#reportsfolder-txtZona4LA').val()) || null;
        
        // Recopilar comentario general
        formData.notas = $('#reportsfolder-txtComentario').val() || '';
        
        // Recopilar datos de la tabla de mediciones
        const mediciones = [];
        $('#table-body tr').each(function() {
            const row = $(this);
            const medicion = {
                distancia: row.find('input[name*="[distancia]"]').val() || '',
                tiempo: row.find('input[name*="[tiempo]"]').val() || '',
                ciclo1: row.find('input[name*="[ciclo1]"]').val() || '',
                ciclo2: row.find('input[name*="[ciclo2]"]').val() || '',
                fc: row.find('input[name*="[fc]"]').val() || '',
                rpe: row.find('input[name*="[rpe]"]').val() || '',
                la: row.find('input[name*="[la]"]').val() || '',
                velocidad: row.find('input[name*="[velocidad]"]').val() || '',
                potencia: row.find('input[name*="[potencia]"]').val() || ''
            };
            
            // Solo agregar si tiene al menos un valor
            if (medicion.distancia || medicion.tiempo || medicion.fc || medicion.la || medicion.potencia) {
                mediciones.push(medicion);
            }
        });
        
        // Guardar mediciones en datos_mediciones
        if (mediciones.length > 0) {
            formData.datos_mediciones = { mediciones: mediciones };
        }
        
        // Recopilar zonas de entrenamiento
        const zonas = [];
        $('#zonas-tbody tr').each(function() {
            const row = $(this);
            const zona = {
                zona: row.find('td').eq(0).text().trim(),
                velocidad_kmh: row.find('input').eq(0).val() || '',
                ritmo_min_km: row.find('input').eq(1).val() || '',
                fc_ppm: row.find('input').eq(2).val() || '',
                lactato_mmol: row.find('input').eq(3).val() || '',
                potencia_w: row.find('input').eq(4).val() || ''
            };
            
            if (zona.velocidad_kmh || zona.fc_ppm || zona.potencia_w || zona.ritmo_min_km) {
                zonas.push(zona);
            }
        });
        
        if (zonas.length > 0) {
            formData.datos_mediciones.zonas = zonas;
        }
        
        console.log('Datos a enviar:', formData);
        
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
                    window.location.href = `informe-lactato.html?id=${data.informe_id}`;
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
