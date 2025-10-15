let allCarpetas = [];
let filteredCarpetas = [];

// Cargar carpetas al iniciar
document.addEventListener('DOMContentLoaded', function() {
    loadCarpetas();
    
    // Event listener para búsqueda
    document.getElementById('search-nombre').addEventListener('input', function(e) {
        filterCarpetas(e.target.value);
    });
    
    // Event listener para limpiar filtro
    document.getElementById('limpiar-filtro').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('search-nombre').value = '';
        filterCarpetas('');
    });
});

// Cargar carpetas desde API
async function loadCarpetas() {
    try {
        const response = await fetch('/api/ejercicios/carpetas');
        const data = await response.json();

        if (data.success) {
            allCarpetas = data.carpetas;
            filteredCarpetas = allCarpetas;
            renderCarpetas(allCarpetas);
            updateInfo(allCarpetas.length, allCarpetas.length);
        }
    } catch (error) {
        console.error('Error loading carpetas:', error);
        document.getElementById('carpetas-tbody').innerHTML = `
            <tr><td colspan="3" class="text-center text-danger">Error al cargar carpetas</td></tr>
        `;
    }
}

// Renderizar carpetas en la tabla
function renderCarpetas(carpetas) {
    const tbody = document.getElementById('carpetas-tbody');
    
    if (carpetas.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="text-center">No hay carpetas disponibles</td></tr>';
        return;
    }

    tbody.innerHTML = carpetas.map((carpeta, index) => {
        // Formatear el nombre de la carpeta para mostrar
        const nombreFormateado = formatCarpetaNombre(carpeta.carpeta);
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td>
                    <div class="carpeta-nombre">${nombreFormateado}</div>
                    <div class="carpeta-count">${carpeta.total_ejercicios} ejercicio${carpeta.total_ejercicios !== 1 ? 's' : ''}</div>
                </td>
                <td>
                    <a href="lista-ejercicios.html?carpeta=${encodeURIComponent(carpeta.carpeta)}" 
                       class="btn btn-sm btn-lista-ejercicios">
                        <i class="fa fa-list"></i> Lista de ejercicios
                    </a>
                </td>
            </tr>
        `;
    }).join('');
}

// Formatear nombre de carpeta para mejor visualización
function formatCarpetaNombre(nombre) {
    // Reemplazar guiones bajos con espacios
    let formatted = nombre.replace(/_/g, ' ');
    
    // Capitalizar primera letra de cada palabra
    formatted = formatted.split(' ').map(word => {
        if (word.match(/^QR/)) return word; // Mantener QR como está
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    
    return formatted;
}

// Filtrar carpetas
function filterCarpetas(searchTerm) {
    if (!searchTerm) {
        filteredCarpetas = allCarpetas;
    } else {
        const search = searchTerm.toLowerCase();
        filteredCarpetas = allCarpetas.filter(carpeta => 
            carpeta.carpeta.toLowerCase().includes(search) ||
            formatCarpetaNombre(carpeta.carpeta).toLowerCase().includes(search)
        );
    }
    
    renderCarpetas(filteredCarpetas);
    updateInfo(filteredCarpetas.length, allCarpetas.length);
}

// Actualizar información de resultados
function updateInfo(showing, total) {
    document.getElementById('total-carpetas').textContent = showing;
    document.getElementById('total-carpetas-all').textContent = total;
}
