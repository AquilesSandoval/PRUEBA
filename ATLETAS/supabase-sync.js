// Función para sincronizar atletas desde Supabase Storage
async function sincronizarAtletasSupabase() {
    try {
        // Mostrar alerta de inicio
        Swal.fire({
            title: 'Sincronizando...',
            text: 'Descargando datos desde Supabase',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        console.log('[SYNC] Iniciando sincronización con Supabase...');

        // Llamar al endpoint de sincronización
        const response = await fetch('/api/sync/atletas-supabase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (result.success) {
            console.log('[SYNC] Sincronización exitosa:', result.stats);

            // Mostrar resultado con SweetAlert
            await Swal.fire({
                icon: 'success',
                title: '¡Sincronización completada!',
                html: `
                    <div style="text-align: left; padding: 10px;">
                        <p><strong>Total de atletas:</strong> ${result.stats.total}</p>
                        <p><strong>✅ Insertados:</strong> ${result.stats.insertados}</p>
                        <p><strong>🔄 Actualizados:</strong> ${result.stats.actualizados}</p>
                        ${result.stats.errores > 0 ? `<p style="color: #f27474;"><strong>❌ Errores:</strong> ${result.stats.errores}</p>` : ''}
                    </div>
                `,
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6'
            });

            // Recargar la lista de atletas
            console.log('[SYNC] Recargando lista de atletas...');
            if (typeof cargarAtletas === 'function') {
                cargarAtletas();
            } else {
                location.reload();
            }

        } else {
            console.error('[SYNC] Error en sincronización:', result.error);
            
            Swal.fire({
                icon: 'error',
                title: 'Error al sincronizar',
                text: result.error || 'Ocurrió un error desconocido',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#d33'
            });
        }

    } catch (error) {
        console.error('[SYNC] Error fatal:', error);
        
        Swal.fire({
            icon: 'error',
            title: 'Error de conexión',
            text: 'No se pudo conectar con el servidor: ' + error.message,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#d33'
        });
    }
}

// Event listener para el botón de sincronización
$(document).ready(function() {
    $('#btnSyncSupabase').on('click', function(e) {
        e.preventDefault();
        sincronizarAtletasSupabase();
    });
});
