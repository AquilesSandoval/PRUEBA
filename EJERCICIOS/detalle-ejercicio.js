let ejercicioId = null;

// Cargar detalle del ejercicio al iniciar
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    ejercicioId = urlParams.get('id');
    
    if (!ejercicioId) {
        window.location.href = 'carpetas-ejercicios.html';
        return;
    }
    
    loadEjercicioDetalle();
});

// Cargar detalle del ejercicio desde API
async function loadEjercicioDetalle() {
    try {
        const response = await fetch(`/api/ejercicios/${ejercicioId}`);
        const data = await response.json();

        if (data.success) {
            renderEjercicioDetalle(data.ejercicio);
        } else {
            document.getElementById('ejercicio-detalle').innerHTML = `
                <div class="alert alert-danger">Ejercicio no encontrado</div>
            `;
        }
    } catch (error) {
        console.error('Error loading ejercicio:', error);
        document.getElementById('ejercicio-detalle').innerHTML = `
            <div class="alert alert-danger">Error al cargar el ejercicio</div>
        `;
    }
}

// Renderizar detalle del ejercicio
function renderEjercicioDetalle(ejercicio) {
    // Actualizar título de la página
    document.getElementById('ejercicio-titulo').textContent = ejercicio.nombre;
    
    const imagenUrl = ejercicio.imagen_path || '../assets/default-exercise.png';
    
    let html = `
        <div class="row">
            <div class="col-md-4">
                <img src="${imagenUrl}" 
                     class="ejercicio-imagen-detalle" 
                     alt="${ejercicio.nombre}"
                     onerror="this.src='../assets/default-exercise.png'">
                
                <div class="info-label">Nombre *</div>
                <div class="info-value">${ejercicio.nombre}</div>
                
                <div class="info-label">Descripción atleta *</div>
                <div class="info-value">${ejercicio.descripcion_atleta || '.'}</div>
                
                <div class="info-label">Categoría *</div>
                <div class="info-value">${ejercicio.categoria || '-'}</div>
            </div>
            
            <div class="col-md-8">
                <div class="info-label">Descripción técnica *</div>
                <div class="info-value">${ejercicio.descripcion_tecnica || '-'}</div>
    `;
    
    // Agregar video si existe
    if (ejercicio.video_path) {
        html += `
                <div class="info-label">Video</div>
                <video class="ejercicio-video" controls>
                    <source src="${ejercicio.video_path}" type="video/mp4">
                    Tu navegador no soporta el elemento de video.
                </video>
        `;
    }
    
    html += `
                <div class="row mt-3">
                    <div class="col-md-4">
                        <div class="info-label">Nivel</div>
                        <div class="info-value">${ejercicio.nivel || '-'}</div>
                    </div>
                    <div class="col-md-4">
                        <div class="info-label">Deporte</div>
                        <div class="info-value">${ejercicio.deporte || '-'}</div>
                    </div>
                    <div class="col-md-4">
                        <div class="info-label">Tipo</div>
                        <div class="info-value">${ejercicio.tipo || '-'}</div>
                    </div>
                </div>
                
                <div class="row mt-3">
                    <div class="col-md-12">
                        <div class="info-label">Activo</div>
                        <div class="info-value">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" ${ejercicio.activo ? 'checked' : ''} disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('ejercicio-detalle').innerHTML = html;
}
