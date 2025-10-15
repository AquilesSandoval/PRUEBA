let allEjercicios = [];
let filteredEjercicios = [];
let carpetaNombre = '';

// Cargar ejercicios al iniciar
document.addEventListener('DOMContentLoaded', function() {
    // Obtener nombre de carpeta del parámetro URL
    const urlParams = new URLSearchParams(window.location.search);
    carpetaNombre = urlParams.get('carpeta');
    
    if (!carpetaNombre) {
        window.location.href = 'carpetas-ejercicios.html';
        return;
    }
    
    // Actualizar título
    document.getElementById('carpeta-titulo').textContent = `Lista de Ejercicios - ${formatCarpetaNombre(carpetaNombre)}`;
    
    loadEjercicios();
    
    // Event listener para búsqueda
    document.getElementById('search-nombre').addEventListener('input', function(e) {
        filterEjercicios(e.target.value);
    });
    
    // Event listener para limpiar filtro
    document.getElementById('limpiar-filtro').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('search-nombre').value = '';
        filterEjercicios('');
    });
});

// Cargar ejercicios desde API
async function loadEjercicios() {
    try {
        const response = await fetch(`/api/ejercicios/carpeta/${encodeURIComponent(carpetaNombre)}`);
        const data = await response.json();

        if (data.success) {
            allEjercicios = data.ejercicios;
            filteredEjercicios = allEjercicios;
            renderEjercicios(allEjercicios);
            updateInfo(allEjercicios.length, allEjercicios.length);
        }
    } catch (error) {
        console.error('Error loading ejercicios:', error);
        document.getElementById('ejercicios-tbody').innerHTML = `
            <tr><td colspan="4" class="text-center text-danger">Error al cargar ejercicios</td></tr>
        `;
    }
}

// Renderizar ejercicios en la tabla
function renderEjercicios(ejercicios) {
    const tbody = document.getElementById('ejercicios-tbody');
    
    if (ejercicios.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">No hay ejercicios disponibles en esta carpeta</td></tr>';
        return;
    }

    tbody.innerHTML = ejercicios.map((ejercicio, index) => {
        // Usar imagen por defecto si no tiene
        const imagenUrl = ejercicio.imagen_path || '../assets/default-exercise.png';
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td align="center">
                    <img src="${imagenUrl}" 
                         class="ejercicio-imagen" 
                         alt="${ejercicio.nombre}"
                         onerror="this.src='../assets/default-exercise.png'">
                </td>
                <td class="ejercicio-nombre">${ejercicio.nombre}</td>
                <td>
                    <a href="detalle-ejercicio.html?id=${ejercicio.id}" 
                       class="btn btn-sm btn-primary" 
                       title="Ver detalle">
                        <i class="fa fa-edit"></i>
                    </a>
                </td>
            </tr>
        `;
    }).join('');
}

// Formatear nombre de carpeta
function formatCarpetaNombre(nombre) {
    let formatted = nombre.replace(/_/g, ' ');
    formatted = formatted.split(' ').map(word => {
        if (word.match(/^QR/)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    return formatted;
}

// Filtrar ejercicios
function filterEjercicios(searchTerm) {
    if (!searchTerm) {
        filteredEjercicios = allEjercicios;
    } else {
        const search = searchTerm.toLowerCase();
        filteredEjercicios = allEjercicios.filter(ejercicio => 
            ejercicio.nombre.toLowerCase().includes(search)
        );
    }
    
    renderEjercicios(filteredEjercicios);
    updateInfo(filteredEjercicios.length, allEjercicios.length);
}

// Actualizar información de resultados
function updateInfo(showing, total) {
    document.getElementById('total-ejercicios').textContent = showing;
    document.getElementById('total-ejercicios-all').textContent = total;
}
