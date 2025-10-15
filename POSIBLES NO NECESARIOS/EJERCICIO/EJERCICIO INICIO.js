// Variables globales
let carpetas = [];
let ejercicios = [];
let carpetaActual = '';
let ejercicioActual = null;

// Cargar carpetas al iniciar
$(document).ready(function() {
    cargarCarpetas();
    configurarEventos();
});

// Configurar eventos
function configurarEventos() {
    // Búsqueda en carpetas
    $('#buscarCarpeta').on('keyup', function() {
        const termino = $(this).val().toLowerCase();
        filtrarCarpetas(termino);
    });

    // Búsqueda en ejercicios
    $('#buscarEjercicio').on('keyup', function() {
        const termino = $(this).val().toLowerCase();
        filtrarEjercicios(termino);
    });

    // Botón volver a carpetas
    $('#volverCarpetas').on('click', function() {
        $('#carpetas-tab').tab('show');
    });

    // Botón volver a lista
    $('#volverLista').on('click', function() {
        $('#lista-tab').tab('show');
    });
}

// Cargar todas las carpetas
function cargarCarpetas() {
    $.ajax({
        url: '/api/ejercicios/carpetas',
        method: 'GET',
        success: function(response) {
            carpetas = response.carpetas || [];
            mostrarCarpetas(carpetas);
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar carpetas:', error);
            $('#carpetasContainer').html(`
                <div class="col-12 text-center py-5">
                    <i class="fas fa-exclamation-triangle fa-3x text-warning"></i>
                    <p class="mt-2">Error al cargar carpetas</p>
                </div>
            `);
        }
    });
}

// Mostrar carpetas
function mostrarCarpetas(data) {
    if (data.length === 0) {
        $('#carpetasContainer').html(`
            <div class="col-12 text-center py-5">
                <p>No hay carpetas disponibles</p>
            </div>
        `);
        return;
    }

    let html = '';
    data.forEach(carpeta => {
        const nombre = carpeta.carpeta || carpeta.nombre;
        const total = carpeta.total_ejercicios || carpeta.total;
        
        html += `
            <div class="col-md-6 col-lg-4 carpeta-item">
                <div class="card carpeta-card" onclick="seleccionarCarpeta('${nombre}')">
                    <div class="card-body">
                        <h5 class="card-title">${formatNombre(nombre)}</h5>
                        <p class="card-text">${total} ejercicios</p>
                        <button class="btn btn-info btn-sm">
                            <i class="fas fa-list"></i> Lista de ejercicios
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    $('#carpetasContainer').html(html);
}

// Filtrar carpetas
function filtrarCarpetas(termino) {
    if (!termino) {
        $('.carpeta-item').show();
        return;
    }

    $('.carpeta-item').each(function() {
        const nombre = $(this).find('.card-title').text().toLowerCase();
        if (nombre.includes(termino)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Seleccionar carpeta
function seleccionarCarpeta(nombre) {
    carpetaActual = nombre;
    $('#carpetaNombre').text(formatNombre(nombre));
    $('#lista-tab').tab('show');
    cargarEjercicios(nombre);
}

// Cargar ejercicios de una carpeta
function cargarEjercicios(carpeta) {
    $('#ejerciciosContainer').html(`
        <div class="col-12 text-center py-5">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
            <p class="mt-2">Cargando ejercicios...</p>
        </div>
    `);

    $.ajax({
        url: `/api/ejercicios/carpeta/${encodeURIComponent(carpeta)}`,
        method: 'GET',
        success: function(response) {
            ejercicios = response.ejercicios || [];
            mostrarEjercicios(ejercicios);
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar ejercicios:', error);
            $('#ejerciciosContainer').html(`
                <div class="col-12 text-center py-5">
                    <i class="fas fa-exclamation-triangle fa-3x text-warning"></i>
                    <p class="mt-2">Error al cargar ejercicios</p>
                </div>
            `);
        }
    });
}

// Mostrar ejercicios
function mostrarEjercicios(data) {
    if (data.length === 0) {
        $('#ejerciciosContainer').html(`
            <div class="col-12 text-center py-5">
                <p>No hay ejercicios en esta carpeta</p>
            </div>
        `);
        return;
    }

    let html = '';
    data.forEach(ejercicio => {
        const imgUrl = ejercicio.imagen_url || '../../assets/default-exercise.png';
        html += `
            <div class="col-md-3 col-sm-6 mb-4 ejercicio-item">
                <div class="card ejercicio-card text-center" onclick="seleccionarEjercicio(${ejercicio.id})">
                    <div class="card-body">
                        <img src="${imgUrl}" 
                             class="ejercicio-img-circle mb-3" 
                             alt="${ejercicio.nombre}"
                             onerror="this.src='../../assets/default-exercise.png'">
                        <h6 class="card-title ejercicio-nombre">${ejercicio.nombre}</h6>
                    </div>
                </div>
            </div>
        `;
    });

    $('#ejerciciosContainer').html(html);
}

// Filtrar ejercicios
function filtrarEjercicios(termino) {
    if (!termino) {
        $('.ejercicio-item').show();
        return;
    }

    $('.ejercicio-item').each(function() {
        const nombre = $(this).find('.ejercicio-nombre').text().toLowerCase();
        if (nombre.includes(termino)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Seleccionar ejercicio
function seleccionarEjercicio(id) {
    $('#detalle-tab').tab('show');
    $('#detalleContainer').html(`
        <div class="col-12 text-center py-5">
            <i class="fas fa-spinner fa-spin fa-3x"></i>
            <p class="mt-2">Cargando detalles...</p>
        </div>
    `);

    $.ajax({
        url: `/api/ejercicios/${id}`,
        method: 'GET',
        success: function(response) {
            ejercicioActual = response.ejercicio;
            mostrarDetalle(ejercicioActual);
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar detalle:', error);
            $('#detalleContainer').html(`
                <div class="col-12 text-center py-5">
                    <i class="fas fa-exclamation-triangle fa-3x text-warning"></i>
                    <p class="mt-2">Error al cargar detalles del ejercicio</p>
                </div>
            `);
        }
    });
}

// Mostrar detalle del ejercicio
function mostrarDetalle(ejercicio) {
    const imgUrl = ejercicio.imagen_url || '../../assets/default-exercise.png';
    let videoHtml = '';
    
    if (ejercicio.video_url) {
        videoHtml = `
            <div class="video-container mb-3">
                <video controls>
                    <source src="${ejercicio.video_url}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        `;
    }

    const html = `
        <div class="col-md-6">
            <img src="${imgUrl}" 
                 class="detalle-img mb-3" 
                 alt="${ejercicio.nombre}"
                 onerror="this.src='../../assets/default-exercise.png'">
            ${videoHtml}
        </div>
        <div class="col-md-6">
            <h4 class="mb-3">${ejercicio.nombre}</h4>
            
            <div class="mb-3">
                <h6><strong>Categoría:</strong></h6>
                <p>${ejercicio.categoria || 'N/A'}</p>
            </div>

            ${ejercicio.descripcion_tecnica ? `
            <div class="mb-3">
                <h6><strong>Descripción Técnica:</strong></h6>
                <p style="white-space: pre-line;">${ejercicio.descripcion_tecnica}</p>
            </div>
            ` : ''}

            ${ejercicio.descripcion_atleta ? `
            <div class="mb-3">
                <h6><strong>Descripción para Atleta:</strong></h6>
                <p style="white-space: pre-line;">${ejercicio.descripcion_atleta}</p>
            </div>
            ` : ''}

            ${ejercicio.nivel ? `
            <div class="mb-3">
                <h6><strong>Nivel:</strong></h6>
                <p>${ejercicio.nivel}</p>
            </div>
            ` : ''}

            ${ejercicio.deporte ? `
            <div class="mb-3">
                <h6><strong>Deporte:</strong></h6>
                <p>${ejercicio.deporte}</p>
            </div>
            ` : ''}

            ${ejercicio.tipo ? `
            <div class="mb-3">
                <h6><strong>Tipo:</strong></h6>
                <p>${ejercicio.tipo}</p>
            </div>
            ` : ''}

            <div class="mb-3">
                <h6><strong>Estado:</strong></h6>
                <span class="badge ${ejercicio.activo ? 'badge-success' : 'badge-secondary'}">
                    ${ejercicio.activo ? 'Activo' : 'Inactivo'}
                </span>
            </div>
        </div>
    `;

    $('#detalleContainer').html(html);
}

// Formatear nombre de carpeta
function formatNombre(nombre) {
    return nombre
        .replace(/_/g, ' ')
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');
}

// Función de logout (debe estar definida)
function logout() {
    localStorage.removeItem('token');
    window.location.href = '../../login.html';
}
