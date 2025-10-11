// ========== SCRIPT COMPARTIDO PARA TODAS LAS SECCIONES DE ENTREVISTAS (PARQ) ==========

$(document).ready(function() {
    
    // ========== CAPTURA DEL ID DEL ATLETA DESDE LA URL ==========
    let atletaIdActual = null;
    const urlParams = new URLSearchParams(window.location.search);
    atletaIdActual = urlParams.get('id');
    
    // Validar que se pasó un ID
    if (!atletaIdActual) {
        swal("Error", "No se especificó el ID del atleta. Redirigiendo...", "error").then(() => {
            window.location.href = '../../Atletas INICIO.html';
        });
        return;
    }
    
    console.log('Entrevista cargada para atleta ID:', atletaIdActual);
    
    
    // ========== FUNCIÓN PARA ACTUALIZAR COLOR DE SWITCHES ==========
    function actualizarColorSwitch($checkbox) {
        const $toggle = $checkbox.closest('.toggle');
        if ($checkbox.is(':checked')) {
            // Cambiar a verde cuando está en SI
            $toggle.removeClass('btn-black off').addClass('btn-success');
            $toggle.find('.toggle-off').removeClass('active');
            $toggle.find('.toggle-on').addClass('active');
        } else {
            // Volver a negro cuando está en NO
            $toggle.removeClass('btn-success').addClass('btn-black off');
            $toggle.find('.toggle-on').removeClass('active');
            $toggle.find('.toggle-off').addClass('active');
        }
    }
    
    // Aplicar estilos a todos los switches al cargar
    function aplicarEstilosSwitches() {
        $('input[type="checkbox"][data-toggle="toggle"]').each(function() {
            actualizarColorSwitch($(this));
        });
    }
    
    // Detectar cambios en los switches
    $(document).on('change', 'input[type="checkbox"][data-toggle="toggle"]', function() {
        actualizarColorSwitch($(this));
    });
    
    
    // ========== NAVEGACIÓN ENTRE PESTAÑAS CON PASO DE ID ==========
    $('.nav-parq').on('click', function(e) {
        e.preventDefault();
        const pagina = $(this).data('page');
        if (pagina) {
            window.location.href = `${pagina}?id=${atletaIdActual}`;
        }
    });
    
    
    // ========== FUNCIÓN PARA CARGAR DATOS EXISTENTES DE LA ENTREVISTA ==========
    function cargarDatosEntrevista(atletaId) {
        console.log('Cargando datos de entrevista para atleta:', atletaId);
        
        // Determinar qué tipo de entrevista estamos cargando según la página actual
        const paginaActual = window.location.pathname.split('/').pop();
        let tipoEntrevista = 'PARQ'; // Por defecto
        
        if (paginaActual.includes('Fuerza')) tipoEntrevista = 'fuerza';
        else if (paginaActual.includes('CardioVascualr')) tipoEntrevista = 'cardiovascular';
        else if (paginaActual.includes('Lesiones')) tipoEntrevista = 'lesiones';
        else if (paginaActual.includes('Objetivos')) tipoEntrevista = 'objetivos';
        else if (paginaActual.includes('Sensorial')) tipoEntrevista = 'sensorial';
        else if (paginaActual.includes('otros')) tipoEntrevista = 'otros';
        
        $.ajax({
            type: 'GET',
            url: `/api/parq/get-data/${atletaId}/${tipoEntrevista}`,
            success: function(response) {
                if (response.success && response.data) {
                    console.log('Datos de entrevista recibidos:', response.data);
                    
                    // Rellenar formulario con datos existentes
                    const datos = response.data.datos_entrevista || {};
                    
                    // Iterar sobre todos los datos y llenar los campos del formulario
                    Object.keys(datos).forEach(function(campo) {
                        const $campo = $(`[name*="${campo}"]`);
                        
                        if ($campo.length > 0) {
                            // Checkbox / Toggle
                            if ($campo.attr('type') === 'checkbox') {
                                if (datos[campo] == 1 || datos[campo] === true) {
                                    $campo.prop('checked', true).trigger('change');
                                }
                            }
                            // Radio button
                            else if ($campo.attr('type') === 'radio') {
                                $campo.filter(`[value="${datos[campo]}"]`).prop('checked', true);
                            }
                            // Select
                            else if ($campo.is('select')) {
                                $campo.val(datos[campo]).trigger('change');
                            }
                            // Input normal (text, number, date, etc.)
                            else {
                                $campo.val(datos[campo]);
                            }
                        }
                    });
                    
                    console.log('Formulario rellenado con datos existentes');
                    
                    // Aplicar estilos de switches después de cargar datos
                    setTimeout(function() {
                        aplicarEstilosSwitches();
                    }, 300);
                } else {
                    console.log('No hay datos previos para esta entrevista');
                }
            },
            error: function(xhr, status, error) {
                // No mostrar error si simplemente no hay datos previos (404)
                if (xhr.status !== 404) {
                    console.error('Error al cargar datos de entrevista:', error);
                }
            }
        });
    }
    
    
    // ========== FUNCIÓN PARA GUARDAR DATOS DE LA ENTREVISTA ==========
    function guardarDatosEntrevista() {
        console.log('Guardando datos de entrevista...');
        
        // Determinar tipo de entrevista
        const paginaActual = window.location.pathname.split('/').pop();
        let tipoEntrevista = 'PARQ';
        
        if (paginaActual.includes('Fuerza')) tipoEntrevista = 'fuerza';
        else if (paginaActual.includes('CardioVascualr')) tipoEntrevista = 'cardiovascular';
        else if (paginaActual.includes('Lesiones')) tipoEntrevista = 'lesiones';
        else if (paginaActual.includes('Objetivos')) tipoEntrevista = 'objetivos';
        else if (paginaActual.includes('Sensorial')) tipoEntrevista = 'sensorial';
        else if (paginaActual.includes('otros')) tipoEntrevista = 'otros';
        
        // Recopilar todos los datos del formulario
        const formData = {};
        const $form = $('form').first();
        
        // Obtener todos los campos del formulario
        $form.find('input, select, textarea').each(function() {
            const $campo = $(this);
            const nombre = $campo.attr('name');
            
            if (nombre && !nombre.includes('_csrf')) { // Ignorar token CSRF
                
                if ($campo.attr('type') === 'checkbox') {
                    formData[nombre] = $campo.is(':checked') ? 1 : 0;
                }
                else if ($campo.attr('type') === 'radio') {
                    if ($campo.is(':checked')) {
                        formData[nombre] = $campo.val();
                    }
                }
                else {
                    formData[nombre] = $campo.val();
                }
            }
        });
        
        console.log('Datos del formulario:', formData);
        
        // Enviar datos al servidor
        $.ajax({
            type: 'POST',
            url: '/api/parq/save-data',
            contentType: 'application/json',
            data: JSON.stringify({
                atleta_id: atletaIdActual,
                tipo_entrevista: tipoEntrevista,
                datos_entrevista: formData
            }),
            success: function(response) {
                if (response.success) {
                    swal("¡Guardado!", "Datos guardados correctamente", "success");
                    console.log('Datos guardados exitosamente');
                } else {
                    swal("Error", response.error || "Error al guardar los datos", "error");
                }
            },
            error: function(xhr, status, error) {
                console.error('Error al guardar datos:', error);
                swal("Error", "Error al conectar con el servidor", "error");
            }
        });
    }
    
    
    // ========== CARGAR DATOS AL INICIAR LA PÁGINA ==========
    cargarDatosEntrevista(atletaIdActual);
    
    
    // ========== DETECTAR BOTONES DE GUARDAR ==========
    // Buscar botones con id="guardarParq" o tipo submit
    $('#guardarParq, button[type="submit"], .btn-guardar').on('click', function(e) {
        e.preventDefault();
        guardarDatosEntrevista();
        return false;
    });
    
    // También permitir guardar con Enter en el formulario
    $('form').on('submit', function(e) {
        e.preventDefault();
        guardarDatosEntrevista();
        return false;
    });
    
});
