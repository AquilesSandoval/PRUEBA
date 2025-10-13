// Birthday functionality for index.html
(function() {
    let currentMonth = new Date().getMonth() + 1; // 1-12
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    // Load birthdays for current month
    async function loadBirthdays(month) {
        try {
            const response = await fetch(`/api/birthdays/${month}`);
            const data = await response.json();
            
            if (data.success) {
                displayBirthdays(data.birthdays);
            } else {
                showError();
            }
        } catch (error) {
            console.error('Error loading birthdays:', error);
            showError();
        }
    }
    
    // Display birthdays
    function displayBirthdays(birthdays) {
        const container = document.getElementById('birthdayContainer');
        
        if (birthdays.length === 0) {
            container.innerHTML = `
                <div class="text-center py-4">
                    <i class="fas fa-birthday-cake" style="font-size: 32px; color: #ccc;"></i>
                    <p class="text-muted mt-2" style="font-size: 12px;">No hay cumpleaños este mes</p>
                </div>
            `;
            return;
        }
        
        let html = '<div style="padding: 10px;">';
        
        birthdays.forEach(athlete => {
            const photoUrl = athlete.foto_url || 'athlete/default.png';
            const birthDate = new Date(athlete.fecha_nacimiento);
            const day = birthDate.getDate();
            const monthName = monthNames[birthDate.getMonth()];
            
            html += `
                <div style="display: flex; align-items: center; padding: 8px 10px; border-bottom: 1px solid #f0f0f0;">
                    <img src="${photoUrl}" 
                         alt="${athlete.nombre}" 
                         class="rounded-circle" 
                         width="40" 
                         height="40" 
                         style="object-fit: cover; border: 2px solid #003B5C; margin-right: 12px;"
                         onerror="this.src='athlete/default.png'">
                    <div style="flex-grow: 1;">
                        <div style="font-size: 13px; font-weight: bold; color: #003B5C;">
                            ${athlete.nombre} ${athlete.apellido}
                        </div>
                        <div style="font-size: 11px; color: #666;">
                            <i class="fas fa-calendar-alt"></i> ${day} de ${monthName}
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-birthday-cake" style="color: #ff6b6b; font-size: 20px;"></i>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    // Show error
    function showError() {
        const container = document.getElementById('birthdayContainer');
        container.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-exclamation-triangle" style="font-size: 32px; color: #e74c3c;"></i>
                <p class="text-muted mt-2" style="font-size: 12px;">Error al cargar cumpleaños</p>
            </div>
        `;
    }
    
    // Update month name
    function updateMonthName() {
        document.getElementById('currentMonthName').textContent = monthNames[currentMonth - 1] + ' ';
    }
    
    // Change month
    function changeMonth(direction) {
        currentMonth += direction;
        
        if (currentMonth > 12) currentMonth = 1;
        if (currentMonth < 1) currentMonth = 12;
        
        updateMonthName();
        loadBirthdays(currentMonth);
    }
    
    // Event listeners
    document.addEventListener('DOMContentLoaded', function() {
        // Set current month name
        updateMonthName();
        
        // Load current month birthdays
        loadBirthdays(currentMonth);
        
        // Navigation buttons
        document.getElementById('left_date').addEventListener('click', function() {
            changeMonth(-1);
        });
        
        document.getElementById('right_date').addEventListener('click', function() {
            changeMonth(1);
        });
    });
})();
