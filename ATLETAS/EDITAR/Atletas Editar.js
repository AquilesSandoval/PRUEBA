$(document).ready(function() {
    
    // Get athlete ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = urlParams.get('id');
    
    if (!athleteId) {
        swal("Error", "No se especificó el ID del atleta", "error").then(() => {
            window.location.href = '../Atletas INICIO.html';
        });
        return;
    }
    
    // Load athlete data
    loadAthleteData(athleteId);
    
    // Handle save button click
    $('.save_b').click(function() {
        saveAthlete();
    });
});

async function loadAthleteData(id) {
    try {
        const response = await fetch(`/api/athletes/${id}`);
        const data = await response.json();
        
        if (data.success && data.athlete) {
            const athlete = data.athlete;
            
            // Populate basic fields
            $('#athletesathlete-first_name').val(athlete.nombre || '');
            $('#athletesathlete-last_name').val(athlete.apellido || '');
            $('#athletesathlete-birthday').val(athlete.fecha_nacimiento ? athlete.fecha_nacimiento.split('T')[0] : '');
            $('#athletesathlete-email').val(athlete.email || '');
            $('#athletesathlete-contact').val(athlete.telefono || '');
            $('#athletesathlete-sport_id').val(athlete.deporte_principal || '').trigger('change');
            $('#pass').val(''); // Don't populate password
            
            // Populate additional fields if they exist
            if (athlete.genero) {
                $(`input[name="Athletesathlete[genero]"][value="${athlete.genero}"]`).prop('checked', true);
            }
            if (athlete.peso) {
                $('#athletesathlete-weight').val(athlete.peso);
            }
            if (athlete.altura) {
                $('#athletesathlete-height').val(athlete.altura);
            }
            if (athlete.notas) {
                $('#athletesathlete-notas').val(athlete.notas);
            }
            
        } else {
            swal("Error", data.error || "No se pudo cargar los datos del atleta", "error");
        }
    } catch (error) {
        console.error('Error loading athlete:', error);
        swal("Error", "Error al cargar los datos del atleta", "error");
    }
}

async function saveAthlete() {
    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = urlParams.get('id');
    
    const nombre = $('#athletesathlete-first_name').val();
    const apellido = $('#athletesathlete-last_name').val();
    const email = $('#athletesathlete-email').val();
    const pass = $('#pass').val();
    
    // Validation
    if (!nombre || !apellido) {
        swal("Error", "Nombre y apellidos son requeridos", "error");
        return;
    }
    
    if (!isValidEmail(email)) {
        swal("Email invalido", {
            icon: "error",
            timer: 5000,
        });
        return;
    }
    
    // Prepare data
    const formData = {
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento: $('#athletesathlete-birthday').val() || null,
        email: email || null,
        telefono: $('#athletesathlete-contact').val() || null,
        deporte_principal: $('#athletesathlete-sport_id').val() || null,
        genero: $('input[name="Athletesathlete[genero]"]:checked').val() || null,
        peso: $('#athletesathlete-weight').val() || null,
        altura: $('#athletesathlete-height').val() || null,
        notas: $('#athletesathlete-notas').val() || null
    };
    
    try {
        const response = await fetch(`/api/athletes/${athleteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            swal({
                title: "¡Éxito!",
                text: "Atleta actualizado exitosamente",
                icon: "success",
                button: "OK"
            }).then(() => {
                window.location.href = '../Atletas INICIO.html';
            });
        } else {
            swal({
                title: "Error",
                text: data.error || "Error al actualizar atleta",
                icon: "error",
                button: "OK"
            });
        }
    } catch (error) {
        console.error('Error:', error);
        swal({
            title: "Error",
            text: "Error de conexión al servidor",
            icon: "error",
            button: "OK"
        });
    }
}

function isValidEmail(emailText) {
    var pattern = new RegExp(
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
    );
    return pattern.test(emailText);
}

function confirmDelete() {
    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = urlParams.get('id');
    
    swal({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
    }).then(async (willDelete) => {
        if (willDelete) {
            try {
                const response = await fetch(`/api/athletes/${athleteId}`, {
                    method: 'DELETE'
                });
                
                const data = await response.json();
                
                if (data.success) {
                    swal("¡Eliminado!", "El atleta ha sido eliminado", "success").then(() => {
                        window.location.href = '../Atletas INICIO.html';
                    });
                } else {
                    swal("Error", data.error || "Error al eliminar atleta", "error");
                }
            } catch (error) {
                console.error('Error:', error);
                swal("Error", "Error de conexión al servidor", "error");
            }
        }
    });
}

// Keep the changeIdioma function if needed
function changeIdioma(id, flag) {
    console.log(id + "-" + flag);
    $.ajax({
        url: '/web/index.php?r=idiomas/changeidioma',
        type: "POST",
        data: "id=" + id + "&flag=" + flag,
        success: function(response) {
            location.reload();
        }
    });
}
