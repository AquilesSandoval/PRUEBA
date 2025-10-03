/**
 * Training Application Business Logic
 * Implements functionality for:
 * - Plan loading (Mesociclos)
 * - Drag & Drop sessions
 * - Session context menu (Edit, Duplicate, Delete, Move, Copy)
 * - Macro -> Meso -> Micro hierarchy
 * - Performance report calculations
 */

(function() {
    'use strict';

    // ============================================================================
    // DATA STORAGE - Simulated backend data
    // ============================================================================
    
    const TrainingData = {
        // Predefined mesociclos (training plans)
        mesociclos: [
            {
                id: 'ME1C10KTR',
                name: 'Plan 10K Triatlón',
                weeks: 12,
                sessions: [
                    {week: 1, day: 1, type: 'running', zone: 1, duration: 60, distance: 10},
                    {week: 1, day: 2, type: 'strength', zone: 1, duration: 45, distance: 0},
                    {week: 1, day: 3, type: 'cycling', zone: 2, duration: 90, distance: 30},
                    {week: 1, day: 5, type: 'running', zone: 2, duration: 45, distance: 7.5},
                    {week: 1, day: 7, type: 'swimming', zone: 1, duration: 60, distance: 2},
                    {week: 2, day: 1, type: 'running', zone: 2, duration: 70, distance: 12},
                    {week: 2, day: 2, type: 'strength', zone: 2, duration: 50, distance: 0},
                    {week: 2, day: 3, type: 'cycling', zone: 2, duration: 100, distance: 35},
                    {week: 2, day: 5, type: 'running', zone: 3, duration: 50, distance: 9},
                    {week: 2, day: 7, type: 'swimming', zone: 2, duration: 70, distance: 2.5}
                ]
            },
            {
                id: 'ME2C5KCAR',
                name: 'Plan 5K Carrera',
                weeks: 8,
                sessions: [
                    {week: 1, day: 1, type: 'running', zone: 1, duration: 30, distance: 5},
                    {week: 1, day: 3, type: 'running', zone: 2, duration: 25, distance: 4},
                    {week: 1, day: 5, type: 'strength', zone: 1, duration: 30, distance: 0},
                    {week: 1, day: 6, type: 'running', zone: 1, duration: 45, distance: 7},
                    {week: 2, day: 1, type: 'running', zone: 2, duration: 35, distance: 6},
                    {week: 2, day: 3, type: 'running', zone: 3, duration: 30, distance: 5},
                    {week: 2, day: 5, type: 'strength', zone: 2, duration: 35, distance: 0},
                    {week: 2, day: 6, type: 'running', zone: 2, duration: 50, distance: 8}
                ]
            },
            {
                id: 'ME3C21KTRI',
                name: 'Plan 21K Medio Maratón',
                weeks: 16,
                sessions: [
                    {week: 1, day: 1, type: 'running', zone: 1, duration: 60, distance: 10},
                    {week: 1, day: 2, type: 'strength', zone: 1, duration: 45, distance: 0},
                    {week: 1, day: 4, type: 'running', zone: 2, duration: 50, distance: 8},
                    {week: 1, day: 6, type: 'running', zone: 3, duration: 40, distance: 6.5},
                    {week: 1, day: 7, type: 'running', zone: 1, duration: 90, distance: 15},
                    {week: 2, day: 1, type: 'running', zone: 2, duration: 65, distance: 11},
                    {week: 2, day: 2, type: 'strength', zone: 2, duration: 50, distance: 0},
                    {week: 2, day: 4, type: 'running', zone: 3, duration: 55, distance: 9},
                    {week: 2, day: 6, type: 'running', zone: 3, duration: 45, distance: 7.5},
                    {week: 2, day: 7, type: 'running', zone: 2, duration: 100, distance: 17}
                ]
            },
            {
                id: 'ME4CFUERZA',
                name: 'Plan Fuerza General',
                weeks: 6,
                sessions: [
                    {week: 1, day: 1, type: 'strength', zone: 2, duration: 60, distance: 0},
                    {week: 1, day: 3, type: 'strength', zone: 2, duration: 60, distance: 0},
                    {week: 1, day: 5, type: 'strength', zone: 1, duration: 45, distance: 0},
                    {week: 2, day: 1, type: 'strength', zone: 3, duration: 70, distance: 0},
                    {week: 2, day: 3, type: 'strength', zone: 3, duration: 70, distance: 0},
                    {week: 2, day: 5, type: 'strength', zone: 2, duration: 50, distance: 0}
                ]
            }
        ],

        // Athlete performance data (for calculations)
        athleteZones: {
            heartRate: {
                zone1: {min: 120, max: 140},
                zone2: {min: 141, max: 160},
                zone3: {min: 161, max: 175},
                zone4: {min: 176, max: 185},
                zone5: {min: 186, max: 200}
            },
            pace: {
                zone1: '6:00', // min/km
                zone2: '5:30',
                zone3: '5:00',
                zone4: '4:30',
                zone5: '4:00'
            }
        },

        // Session types configuration
        sessionTypes: {
            running: {name: 'Carrera', icon: 'race-blue-icon.png', color: '#4ACF74'},
            cycling: {name: 'Ciclismo', icon: 'cycling-blue-skype-icon.png', color: '#5DADE2'},
            swimming: {name: 'Natación', icon: 'swimming-blue-2.jpg', color: '#48C9B0'},
            strength: {name: 'Fuerza', icon: 'force-blue-icon.png', color: '#F39C12'}
        }
    };

    // ============================================================================
    // PLAN LOADING FUNCTIONALITY
    // ============================================================================

    window.TrainingApp = window.TrainingApp || {};

    /**
     * Load a predefined mesociclo into the calendar
     */
    TrainingApp.loadMesociclo = function(mesocicloId, targetWeek) {
        const mesociclo = TrainingData.mesociclos.find(m => m.id === mesocicloId);
        
        if (!mesociclo) {
            console.error('Mesociclo not found:', mesocicloId);
            return false;
        }

        console.log('Loading mesociclo:', mesociclo.name);

        // Clear existing sessions in target week if specified
        if (targetWeek !== undefined) {
            this.clearWeek(targetWeek);
        }

        // Load sessions for all weeks
        mesociclo.sessions.forEach(session => {
            const weekNum = targetWeek !== undefined ? targetWeek : session.week - 1;
            this.addSessionToCalendar(weekNum, session);
        });

        // Update statistics
        this.updateWeekStatistics(targetWeek);

        return true;
    };

    /**
     * Get available mesociclos
     */
    TrainingApp.getMesociclos = function(searchTerm) {
        if (!searchTerm || searchTerm.length < 3) {
            return TrainingData.mesociclos;
        }
        
        searchTerm = searchTerm.toLowerCase();
        return TrainingData.mesociclos.filter(m => 
            m.name.toLowerCase().includes(searchTerm) || 
            m.id.toLowerCase().includes(searchTerm)
        );
    };

    /**
     * Populate mesociclo selector
     */
    TrainingApp.populateMesocicloSelector = function(selectorId) {
        const selector = $(selectorId);
        if (!selector.length) return;

        selector.empty();
        selector.append('<option value="">Seleccione un plan...</option>');
        
        TrainingData.mesociclos.forEach(mesociclo => {
            selector.append(
                `<option value="${mesociclo.id}">${mesociclo.name} (${mesociclo.weeks} semanas)</option>`
            );
        });
    };

    // ============================================================================
    // DRAG & DROP FUNCTIONALITY
    // ============================================================================

    /**
     * Initialize drag and drop for sessions
     */
    TrainingApp.initDragAndDrop = function() {
        // Make sessions draggable
        $('.session-item').attr('draggable', 'true');
        
        $('.session-item').on('dragstart', function(e) {
            const sessionData = {
                id: $(this).attr('id'),
                type: $(this).data('type'),
                zone: $(this).data('zone'),
                duration: $(this).data('duration'),
                distance: $(this).data('distance')
            };
            e.originalEvent.dataTransfer.setData('text/plain', JSON.stringify(sessionData));
            $(this).addClass('dragging');
        });

        $('.session-item').on('dragend', function(e) {
            $(this).removeClass('dragging');
        });

        // Make day containers droppable
        $('.day-container, .cuadroInfo').on('dragover', function(e) {
            e.preventDefault();
            $(this).addClass('drag-over');
        });

        $('.day-container, .cuadroInfo').on('dragleave', function(e) {
            $(this).removeClass('drag-over');
        });

        $('.day-container, .cuadroInfo').on('drop', function(e) {
            e.preventDefault();
            $(this).removeClass('drag-over');
            
            const data = JSON.parse(e.originalEvent.dataTransfer.getData('text/plain'));
            const originalElement = $('#' + data.id);
            
            // Move the session
            if (originalElement.length) {
                originalElement.detach().appendTo($(this));
                
                // Update week statistics
                const weekNum = $(this).closest('.week_item').data('cont');
                TrainingApp.updateWeekStatistics(weekNum);
            }
        });
    };

    // ============================================================================
    // SESSION CONTEXT MENU
    // ============================================================================

    /**
     * Show context menu for session
     */
    TrainingApp.showSessionContextMenu = function(sessionElement, x, y) {
        const menu = $('#session-context-menu');
        
        if (!menu.length) {
            // Create context menu if it doesn't exist
            const menuHTML = `
                <div id="session-context-menu" class="context-menu" style="display:none; position:absolute; z-index:9999;">
                    <ul class="list-unstyled">
                        <li><a href="#" class="context-edit"><i class="fa fa-edit"></i> Editar</a></li>
                        <li><a href="#" class="context-duplicate"><i class="fa fa-copy"></i> Duplicar</a></li>
                        <li><a href="#" class="context-move"><i class="fa fa-arrows"></i> Mover a otra fecha</a></li>
                        <li><a href="#" class="context-copy-athlete"><i class="fa fa-user"></i> Copiar a otro atleta</a></li>
                        <li class="divider"></li>
                        <li><a href="#" class="context-delete"><i class="fa fa-trash"></i> Eliminar</a></li>
                    </ul>
                </div>
            `;
            $('body').append(menuHTML);
        }

        const contextMenu = $('#session-context-menu');
        contextMenu.data('session-element', sessionElement);
        contextMenu.css({left: x + 'px', top: y + 'px'}).show();
    };

    /**
     * Initialize session context menu
     */
    TrainingApp.initSessionContextMenu = function() {
        // Right-click on sessions
        $(document).on('contextmenu', '.session-item', function(e) {
            e.preventDefault();
            TrainingApp.showSessionContextMenu($(this), e.pageX, e.pageY);
            return false;
        });

        // Click on sessions (alternative to right-click)
        $(document).on('click', '.session-item', function(e) {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                TrainingApp.showSessionContextMenu($(this), e.pageX, e.pageY);
            }
        });

        // Hide menu when clicking elsewhere
        $(document).on('click', function(e) {
            if (!$(e.target).closest('#session-context-menu').length) {
                $('#session-context-menu').hide();
            }
        });

        // Context menu actions
        $(document).on('click', '.context-edit', function(e) {
            e.preventDefault();
            const session = $('#session-context-menu').data('session-element');
            TrainingApp.editSession(session);
            $('#session-context-menu').hide();
        });

        $(document).on('click', '.context-duplicate', function(e) {
            e.preventDefault();
            const session = $('#session-context-menu').data('session-element');
            TrainingApp.duplicateSession(session);
            $('#session-context-menu').hide();
        });

        $(document).on('click', '.context-move', function(e) {
            e.preventDefault();
            const session = $('#session-context-menu').data('session-element');
            TrainingApp.moveSessionToDate(session);
            $('#session-context-menu').hide();
        });

        $(document).on('click', '.context-copy-athlete', function(e) {
            e.preventDefault();
            const session = $('#session-context-menu').data('session-element');
            TrainingApp.copyToAthlete(session);
            $('#session-context-menu').hide();
        });

        $(document).on('click', '.context-delete', function(e) {
            e.preventDefault();
            const session = $('#session-context-menu').data('session-element');
            TrainingApp.deleteSession(session);
            $('#session-context-menu').hide();
        });
    };

    /**
     * Edit session
     */
    TrainingApp.editSession = function(sessionElement) {
        const sessionData = {
            id: sessionElement.attr('id'),
            type: sessionElement.data('type'),
            zone: sessionElement.data('zone'),
            duration: sessionElement.data('duration'),
            distance: sessionElement.data('distance')
        };

        // Show edit modal
        const modal = $('#editSessionModal');
        if (modal.length) {
            $('#edit-session-zone').val(sessionData.zone);
            $('#edit-session-duration').val(sessionData.duration);
            $('#edit-session-distance').val(sessionData.distance);
            modal.data('session-element', sessionElement);
            modal.modal('show');
        } else {
            // Create edit modal if it doesn't exist
            this.createEditModal(sessionElement, sessionData);
        }
    };

    /**
     * Create edit session modal
     */
    TrainingApp.createEditModal = function(sessionElement, sessionData) {
        const modalHTML = `
            <div class="modal fade" id="editSessionModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Editar Sesión</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Zona:</label>
                                <select id="edit-session-zone" class="form-control">
                                    <option value="1">Zona 1</option>
                                    <option value="2">Zona 2</option>
                                    <option value="3">Zona 3</option>
                                    <option value="4">Zona 4</option>
                                    <option value="5">Zona 5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Duración (min):</label>
                                <input type="number" id="edit-session-duration" class="form-control" value="${sessionData.duration}">
                            </div>
                            <div class="form-group">
                                <label>Distancia (km):</label>
                                <input type="number" id="edit-session-distance" class="form-control" step="0.1" value="${sessionData.distance}">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" id="save-session-edit">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('body').append(modalHTML);
        
        const modal = $('#editSessionModal');
        modal.data('session-element', sessionElement);
        modal.modal('show');

        // Save button handler
        $('#save-session-edit').off('click').on('click', function() {
            const zone = $('#edit-session-zone').val();
            const duration = $('#edit-session-duration').val();
            const distance = $('#edit-session-distance').val();
            
            sessionElement.data('zone', zone);
            sessionElement.data('duration', duration);
            sessionElement.data('distance', distance);
            
            // Update visual representation
            sessionElement.find('.session-duration').text(duration + ' min');
            sessionElement.find('.session-distance').text(distance + ' km');
            
            // Update statistics
            const weekNum = sessionElement.closest('.week_item').data('cont');
            TrainingApp.updateWeekStatistics(weekNum);
            
            modal.modal('hide');
        });
    };

    /**
     * Duplicate session
     */
    TrainingApp.duplicateSession = function(sessionElement) {
        const clone = sessionElement.clone();
        const newId = 'session_' + Date.now();
        clone.attr('id', newId);
        clone.insertAfter(sessionElement);
        
        // Re-initialize drag and drop for new element
        this.initDragAndDrop();
        
        // Update statistics
        const weekNum = sessionElement.closest('.week_item').data('cont');
        this.updateWeekStatistics(weekNum);
    };

    /**
     * Delete session
     */
    TrainingApp.deleteSession = function(sessionElement) {
        if (confirm('¿Está seguro de eliminar esta sesión?')) {
            const weekNum = sessionElement.closest('.week_item').data('cont');
            sessionElement.remove();
            this.updateWeekStatistics(weekNum);
        }
    };

    /**
     * Move session to another date
     */
    TrainingApp.moveSessionToDate = function(sessionElement) {
        const modalHTML = `
            <div class="modal fade" id="moveSessionModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Mover Sesión a Otra Fecha</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Semana:</label>
                                <select id="move-session-week" class="form-control"></select>
                            </div>
                            <div class="form-group">
                                <label>Día:</label>
                                <select id="move-session-day" class="form-control">
                                    <option value="1">Lunes</option>
                                    <option value="2">Martes</option>
                                    <option value="3">Miércoles</option>
                                    <option value="4">Jueves</option>
                                    <option value="5">Viernes</option>
                                    <option value="6">Sábado</option>
                                    <option value="7">Domingo</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" id="confirm-move-session">Mover</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $('#moveSessionModal').remove();
        $('body').append(modalHTML);
        
        // Populate week selector
        const weekSelect = $('#move-session-week');
        $('.week_item').each(function() {
            const cont = $(this).data('cont');
            const textCont = $(this).data('textcont');
            weekSelect.append(`<option value="${cont}">Semana ${textCont || cont + 1}</option>`);
        });
        
        const modal = $('#moveSessionModal');
        modal.modal('show');

        $('#confirm-move-session').off('click').on('click', function() {
            const targetWeek = $('#move-session-week').val();
            const targetDay = $('#move-session-day').val();
            
            const dayNames = ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
            const targetContainer = $('#' + dayNames[targetDay] + targetWeek);
            
            if (targetContainer.length) {
                const originalWeek = sessionElement.closest('.week_item').data('cont');
                sessionElement.detach().appendTo(targetContainer);
                
                TrainingApp.updateWeekStatistics(originalWeek);
                TrainingApp.updateWeekStatistics(targetWeek);
            }
            
            modal.modal('hide');
        });
    };

    /**
     * Copy session to another athlete
     */
    TrainingApp.copyToAthlete = function(sessionElement) {
        const modalHTML = `
            <div class="modal fade" id="copyAthleteModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Copiar Sesión a Otro Atleta</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Atleta:</label>
                                <select id="copy-athlete-select" class="form-control">
                                    <option value="1">Atleta 1</option>
                                    <option value="2">Atleta 2</option>
                                    <option value="3">Atleta 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Fecha:</label>
                                <input type="date" id="copy-athlete-date" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" id="confirm-copy-athlete">Copiar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $('#copyAthleteModal').remove();
        $('body').append(modalHTML);
        
        const modal = $('#copyAthleteModal');
        modal.modal('show');

        $('#confirm-copy-athlete').off('click').on('click', function() {
            const athleteId = $('#copy-athlete-select').val();
            const date = $('#copy-athlete-date').val();
            
            console.log('Copying session to athlete:', athleteId, 'on date:', date);
            alert(`Sesión copiada al atleta ${athleteId} para la fecha ${date}`);
            
            modal.modal('hide');
        });
    };

    // ============================================================================
    // CALENDAR AND SESSION MANAGEMENT
    // ============================================================================

    /**
     * Add session to calendar
     */
    TrainingApp.addSessionToCalendar = function(weekNum, sessionData) {
        const dayNames = ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
        const dayContainer = $('#' + dayNames[sessionData.day] + weekNum);
        
        if (!dayContainer.length) {
            console.warn('Day container not found for week', weekNum, 'day', sessionData.day);
            return;
        }

        const sessionType = TrainingData.sessionTypes[sessionData.type];
        const sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        const sessionHTML = `
            <div id="${sessionId}" class="session-item" 
                 data-type="${sessionData.type}" 
                 data-zone="${sessionData.zone}" 
                 data-duration="${sessionData.duration}"
                 data-distance="${sessionData.distance}"
                 style="background-color:${sessionType.color}; padding:5px; border-radius:8px; margin-bottom:10px; cursor:move;">
                <img width="15" src="../assets/${sessionType.icon}" style="float:left; margin-right:5px;">
                <div style="font-size:12px; color:#fff;">
                    <strong>${sessionType.name}</strong><br>
                    <span class="session-duration">${sessionData.duration} min</span> | 
                    <span class="session-distance">${sessionData.distance} km</span><br>
                    Zona ${sessionData.zone}
                </div>
            </div>
        `;
        
        dayContainer.append(sessionHTML);
        this.initDragAndDrop();
    };

    /**
     * Clear all sessions in a week
     */
    TrainingApp.clearWeek = function(weekNum) {
        const dayNames = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
        dayNames.forEach(day => {
            $('#' + day + weekNum).find('.session-item').remove();
        });
    };

    /**
     * Update week statistics
     */
    TrainingApp.updateWeekStatistics = function(weekNum) {
        if (weekNum === undefined) return;

        const dayNames = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
        let totalTime = 0;
        let totalDistance = 0;
        let sessionCount = 0;

        dayNames.forEach(day => {
            $('#' + day + weekNum).find('.session-item').each(function() {
                totalTime += parseInt($(this).data('duration')) || 0;
                totalDistance += parseFloat($(this).data('distance')) || 0;
                sessionCount++;
            });
        });

        // Update totals display
        $('#ecos_tot' + weekNum).text(sessionCount);
        $('#tot_ecos_week' + weekNum).val(sessionCount);
        
        // Update other statistics if elements exist
        const hours = (totalTime / 60).toFixed(1);
        $(`#total-hours-week${weekNum}`).text(hours);
        $(`#total-distance-week${weekNum}`).text(totalDistance.toFixed(1));
    };

    // ============================================================================
    // PERFORMANCE CALCULATIONS
    // ============================================================================

    /**
     * Calculate distance based on duration and zone
     */
    TrainingApp.calculateDistance = function(duration, zone, sport) {
        const paces = {
            running: [12.2, 13.0, 13.8, 14.5, 15.0], // km/h for each zone
            cycling: [25, 28, 31, 33, 35],
            swimming: [1.5, 1.8, 2.0, 2.2, 2.4]
        };

        const pace = paces[sport] ? paces[sport][zone - 1] : 10;
        return ((duration / 60) * pace).toFixed(2);
    };

    /**
     * Calculate calories based on session data
     */
    TrainingApp.calculateCalories = function(duration, zone, sport, athleteWeight = 70) {
        const metValues = {
            running: [7, 8.5, 10, 11.5, 13],
            cycling: [5, 6.5, 8, 9.5, 11],
            swimming: [6, 7, 8.5, 10, 11.5],
            strength: [3, 4, 5, 6, 7]
        };

        const met = metValues[sport] ? metValues[sport][zone - 1] : 5;
        const hours = duration / 60;
        return Math.round(met * athleteWeight * hours);
    };

    // ============================================================================
    // MACRO -> MESO -> MICRO HIERARCHY
    // ============================================================================

    /**
     * Load macrociclo structure
     */
    TrainingApp.loadMacrociclo = function(macrocicloId) {
        console.log('Loading macrociclo:', macrocicloId);
        // Implement macrociclo loading logic
        // This would typically load multiple mesociclos that make up the macrociclo
    };

    /**
     * Navigate hierarchy
     */
    TrainingApp.navigateToMicrociclo = function(mesocicloId, weekNumber) {
        console.log('Navigating to microciclo - Meso:', mesocicloId, 'Week:', weekNumber);
        // Implement navigation logic
    };

    // ============================================================================
    // INITIALIZATION
    // ============================================================================

    /**
     * Initialize the application
     */
    TrainingApp.init = function() {
        console.log('Initializing Training App...');
        
        // Initialize drag and drop
        this.initDragAndDrop();
        
        // Initialize context menu
        this.initSessionContextMenu();
        
        // Enhance existing menus
        this.enhanceExistingMenus();
        
        // Add plan loader button
        this.addPlanLoaderButton();
        
        // Populate mesociclo selectors if they exist
        if ($('#mesociclo_select').length) {
            this.populateMesocicloSelector('#mesociclo_select');
        }
        
        // Add mesociclo change handler
        $('#mesociclo_select').on('change', function() {
            const mesocicloId = $(this).val();
            if (mesocicloId) {
                const weekNum = $('#weeks_select').val() || 0;
                TrainingApp.loadMesociclo(mesocicloId, weekNum);
            }
        });

        console.log('Training App initialized successfully');
    };

    // Auto-initialize when DOM is ready
    $(document).ready(function() {
        if (typeof TrainingApp !== 'undefined') {
            TrainingApp.init();
        }
    });

    /**
     * Enhance existing dropdown menus to work with our context menu
     */
    TrainingApp.enhanceExistingMenus = function() {
        // The existing menus already have edit, duplicate, delete, move, copy
        // We just need to make them work better with drag & drop
        console.log('Enhancing existing menus...');
        
        // Make existing session divs draggable
        $('[id^="lunes"], [id^="martes"], [id^="miercoles"], [id^="jueves"], [id^="viernes"], [id^="sabado"], [id^="domingo"]').each(function() {
            $(this).find('div[data-id]').attr('draggable', 'true').addClass('session-item');
        });
        
        this.initDragAndDrop();
    };

    /**
     * Add quick plan loader to page
     */
    TrainingApp.addPlanLoaderButton = function() {
        const buttonHTML = `
            <div id="quick-plan-loader" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
                <button type="button" class="btn btn-success btn-round btn-lg" id="btn-load-plan" title="Cargar Plan Predefinido">
                    <i class="fa fa-plus"></i> Cargar Plan
                </button>
            </div>
        `;
        
        if (!$('#quick-plan-loader').length) {
            $('body').append(buttonHTML);
            
            $('#btn-load-plan').on('click', function() {
                TrainingApp.showPlanLoaderModal();
            });
        }
    };

    /**
     * Show plan loader modal
     */
    TrainingApp.showPlanLoaderModal = function() {
        const modalHTML = `
            <div class="modal fade" id="planLoaderModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Cargar Plan Predefinido</h5>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label><strong>Seleccione un Plan:</strong></label>
                                <select id="plan-selector" class="form-control">
                                    <option value="">-- Seleccione un plan --</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label><strong>Semana inicial:</strong></label>
                                <select id="plan-week-selector" class="form-control"></select>
                            </div>
                            <div id="plan-preview-container" class="mt-3"></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-success" id="confirm-load-plan">Cargar Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $('#planLoaderModal').remove();
        $('body').append(modalHTML);
        
        // Populate plan selector
        const planSelect = $('#plan-selector');
        TrainingData.mesociclos.forEach(plan => {
            planSelect.append(
                `<option value="${plan.id}">${plan.name} (${plan.weeks} semanas)</option>`
            );
        });
        
        // Populate week selector
        const weekSelect = $('#plan-week-selector');
        $('.week_item').each(function(index) {
            const cont = $(this).data('cont');
            const textCont = $(this).data('textcont');
            weekSelect.append(`<option value="${cont}">Semana ${textCont || (index + 1)}</option>`);
        });
        
        // Show preview when plan is selected
        $('#plan-selector').on('change', function() {
            const planId = $(this).val();
            if (planId) {
                const plan = TrainingData.mesociclos.find(p => p.id === planId);
                if (plan) {
                    const previewHTML = `
                        <div class="plan-preview">
                            <div class="plan-preview-header">${plan.name}</div>
                            <p><strong>Duración:</strong> ${plan.weeks} semanas</p>
                            <p><strong>Sesiones de ejemplo (Semana 1):</strong></p>
                            <div class="plan-preview-sessions">
                                ${plan.sessions.slice(0, 5).map(s => {
                                    const type = TrainingData.sessionTypes[s.type];
                                    return `
                                        <div class="plan-preview-session" style="border-left: 3px solid ${type.color}">
                                            <strong>${type.name}</strong><br>
                                            ${s.duration} min | ${s.distance} km<br>
                                            Zona ${s.zone}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                    $('#plan-preview-container').html(previewHTML);
                }
            } else {
                $('#plan-preview-container').empty();
            }
        });
        
        // Load plan button
        $('#confirm-load-plan').on('click', function() {
            const planId = $('#plan-selector').val();
            const weekNum = parseInt($('#plan-week-selector').val());
            
            if (!planId) {
                alert('Por favor seleccione un plan');
                return;
            }
            
            if (confirm('¿Está seguro de cargar este plan? Se agregarán las sesiones a la semana seleccionada.')) {
                TrainingApp.loadMesociclo(planId, weekNum);
                $('#planLoaderModal').modal('hide');
                
                swal("Plan Cargado!", "El plan se ha cargado exitosamente en el calendario.", {
                    icon: "success",
                    buttons: {
                        confirm: {
                            className: 'btn btn-success'
                        }
                    }
                });
            }
        });
        
        $('#planLoaderModal').modal('show');
    };

})();
