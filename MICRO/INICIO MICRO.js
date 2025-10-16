// Variables globales
let currentPage = 1;
let totalPages = 1;
let allMicros = [];
let filteredMicros = [];

// Cargar microciclos desde el API
async function loadMicrociclos(page = 1) {
    // Mostrar indicador de carga
    const tbody = document.querySelector('#w0 tbody');
    tbody.innerHTML = `
        <tr>
            <td colspan="3" class="text-center" style="padding: 40px;">
                <i class="fas fa-spinner fa-spin" style="font-size: 24px; color: #4acf74;"></i>
                <p class="mt-3 mb-0" style="color: #666;">Cargando microciclos...</p>
            </td>
        </tr>
    `;
    
    try {
        const response = await fetch(`/api/microciclos?page=${page}&limit=100`);
        const data = await response.json();

        if (data.success) {
            allMicros = data.microciclos;
            filteredMicros = allMicros;
            currentPage = data.pagination.page;
            totalPages = data.pagination.totalPages;
            
            renderTable(allMicros);
            renderPagination(data.pagination);
            updateResultInfo(data.pagination);
        }
    } catch (error) {
        console.error('Error loading microciclos:', error);
        document.querySelector('#w0 tbody').innerHTML = `
            <tr><td colspan="3" class="text-center text-danger">Error al cargar microciclos</td></tr>
        `;
    }
}

// Renderizar tabla
function renderTable(micros) {
    const tbody = document.querySelector('#w0 tbody');
    
    if (micros.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="text-center">No hay microciclos disponibles</td></tr>';
        return;
    }

    tbody.innerHTML = micros.map((micro, index) => {
        const rowNum = (currentPage - 1) * 100 + index + 1;
        
        return `
            <tr>
                <td>${rowNum}</td>
                <td>${micro.nombre || `Microciclo ${micro.id}`}</td>
                <td>
                    <a href="MICROSICLO.html?id=${micro.id}" class="btn btn-sm btn-primary" title="Ver">
                        <i class="fa fa-eye"></i>
                    </a>
                </td>
            </tr>
        `;
    }).join('');
}

// Renderizar paginación
function renderPagination(pagination) {
    const paginationContainer = document.querySelector('.pagination');
    let html = '';

    // Botón Primero
    const firstDisabled = currentPage === 1 ? 'disabled' : '';
    html += `<li class="first ${firstDisabled}">
        <a href="#" onclick="changePage(1); return false;" ${firstDisabled ? 'tabindex="-1"' : ''}>Primero</a>
    </li>`;

    // Botón Anterior
    const prevDisabled = currentPage === 1 ? 'disabled' : '';
    html += `<li class="prev ${prevDisabled}">
        <a href="#" onclick="changePage(${currentPage - 1}); return false;" ${prevDisabled ? 'tabindex="-1"' : ''}>«</a>
    </li>`;

    // Números de página
    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(totalPages, currentPage + 5);

    for (let i = startPage; i <= endPage; i++) {
        const active = i === currentPage ? 'active' : '';
        html += `<li class="paginate_button page-item ${active}">
            <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
        </li>`;
    }

    // Botón Siguiente
    const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    html += `<li class="next ${nextDisabled}">
        <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;" ${nextDisabled ? 'tabindex="-1"' : ''}>»</a>
    </li>`;

    // Botón Último
    const lastDisabled = currentPage === totalPages ? 'disabled' : '';
    html += `<li class="last ${lastDisabled}">
        <a class="page-link" href="#" onclick="changePage(${totalPages}); return false;" ${lastDisabled ? 'tabindex="-1"' : ''}>Último</a>
    </li>`;

    paginationContainer.innerHTML = html;
}

// Actualizar información de resultados
function updateResultInfo(pagination) {
    const start = (pagination.page - 1) * pagination.limit + 1;
    const end = Math.min(pagination.page * pagination.limit, pagination.total);
    const infoElement = document.querySelector('#w0 > a').nextSibling;
    infoElement.textContent = ` Viendo ${end - start + 1} de ${pagination.total} resultados.`;
}

// Cambiar página
function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        loadMicrociclos(page);
        window.scrollTo(0, 0);
    }
}

// Filtrar microciclos
function filterMicros(searchTerm) {
    if (!searchTerm) {
        filteredMicros = allMicros;
    } else {
        filteredMicros = allMicros.filter(micro => 
            (micro.nombre || '').toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    renderTable(filteredMicros);
}

// Limpiar filtro
function clearFilter() {
    const filterInput = document.querySelector('#w0-filters input[name="MesocyclesweekSearch[code]"]');
    if (filterInput) {
        filterInput.value = '';
        filterMicros('');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Cargar microciclos al inicio
    loadMicrociclos(1);

    // Listener para el botón limpiar filtro
    const clearButton = document.querySelector('#w0 > a');
    if (clearButton) {
        clearButton.addEventListener('click', function(e) {
            e.preventDefault();
            clearFilter();
        });
    }

    // Listener para el input de búsqueda
    const searchInput = document.querySelector('#w0-filters input[name="MesocyclesweekSearch[code]"]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterMicros(e.target.value);
        });
    }
});

// Función para eliminar (si se necesita)
function confirmDelete(key, token) {
    alertify.confirm('Confirmación', 'Seguro que desea eliminar el registro', 
        async function() {
            try {
                const response = await fetch(`/api/microciclos/${key}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                const result = await response.json();
                
                if (result.success) {
                    alertify.success('<span style="color: #FFFFFF;"><i class="fa fa-trash" aria-hidden="true"></i> &nbsp;&nbsp;Registro eliminado<br>Espere un momento...</span>', 2, function() {
                        loadMicrociclos(currentPage);
                    }); 
                } else {
                    alertify.error('<span style="color: #FFFFFF;">Ocurrió un error, intenta de nuevo</span>', 2);
                }
            } catch (error) {
                console.error('Error:', error);
                alertify.error('<span style="color: #FFFFFF;">Ocurrió un error, intenta de nuevo</span>', 2);
            }
        },
        function() {}
    );
}
