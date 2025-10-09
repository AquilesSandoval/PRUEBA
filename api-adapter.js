/**
 * API Adapter - Compatibility layer to redirect old PHP API calls to new Express backend
 * This file intercepts AJAX calls to the old Yii PHP backend and redirects them to the new Express API
 */

(function() {
  'use strict';

  // Store original jQuery ajax
  const originalAjax = jQuery.ajax;

  // Map of old PHP routes to new API endpoints
  const routeMap = {
    // Athletes/Atletas
    '/web/index.php?r=site/deleteactividad': (data) => ({
      method: 'DELETE',
      url: `/api/activities/${data.actividadID}`
    }),
    '/web/index.php?r=site/deletependiente': (data) => ({
      method: 'DELETE',
      url: `/api/pendientes/${data.id}`
    }),
    '/web/index.php?r=site/updatependiente': (data) => ({
      method: 'PUT',
      url: `/api/pendientes/${data.id}`,
      data: { select: data.select }
    }),
    '/web/index.php?r=site/updatependiente2': (data) => ({
      method: 'PUT',
      url: `/api/pendientes/${data.id}`,
      data: { name: data.name, date: data.date }
    }),
    '/web/index.php?r=site/savependiente': (data) => ({
      method: 'POST',
      url: '/api/pendientes',
      data: data
    }),
    '/web/index.php?r=site/saveubicacion': (data) => ({
      method: 'POST',
      url: '/api/ubicaciones',
      data: data
    }),
    '/web/index.php?r=site/deletelocation': (data) => ({
      method: 'DELETE',
      url: '/api/ubicaciones',
      data: data
    }),
    '/web/index.php?r=site/savedata': (data) => ({
      method: 'POST',
      url: '/api/user-data',
      data: data
    }),
    
    // Mesociclo routes
    '/web/index.php?r=mesocyclesmesocycle/getfolder': (data) => ({
      method: 'GET',
      url: `/api/mesociclos/folder?type=${data.type}&word=${data.word}`
    }),
    
    // Circuitos routes
    '/web/index.php?r=circuitscircuit/delete': (data) => ({
      method: 'DELETE',
      url: `/api/circuitos/${data.key}`
    }),
    
    // Sesiones routes
    '/web/index.php?r=sessionsssession/getcitylist': (data) => ({
      method: 'GET',
      url: `/api/sessions/cities?q=${data.q}`
    }),
    '/web/index.php?r=sessionsssession/getsport': (data) => ({
      method: 'GET',
      url: '/api/sessions/sports'
    }),
    '/web/index.php?r=sessionsssession/getdiscipline': (data) => ({
      method: 'GET',
      url: '/api/sessions/disciplines'
    }),
    '/web/index.php?r=sessionsssession/getcontain': (data) => ({
      method: 'GET',
      url: '/api/sessions/contains'
    }),
    '/web/index.php?r=sessionsssession/getlevel': (data) => ({
      method: 'GET',
      url: '/api/sessions/levels'
    }),
    
    // Language change
    '/web/index.php?r=idiomas/changeidioma': (data) => ({
      method: 'POST',
      url: '/api/language/change',
      data: data
    })
  };

  // Override jQuery ajax
  jQuery.ajax = function(url, options) {
    // Handle both jQuery.ajax(url, options) and jQuery.ajax(options)
    if (typeof url === 'object') {
      options = url;
      url = options.url;
    }

    // Check if this is a PHP route that needs to be redirected
    for (const [oldRoute, mapper] of Object.entries(routeMap)) {
      if (url && url.includes(oldRoute)) {
        console.log(`[API Adapter] Redirecting ${oldRoute} to new API`);
        const newConfig = mapper(options.data || {});
        
        // Update the options with new route
        options.url = newConfig.url;
        if (newConfig.method) {
          options.type = newConfig.method;
          options.method = newConfig.method;
        }
        if (newConfig.data) {
          options.data = newConfig.data;
        }
        
        break;
      }
    }

    // Call original ajax with potentially modified options
    return originalAjax.call(jQuery, url, options);
  };

  // Preserve jQuery.ajax properties
  for (const prop in originalAjax) {
    if (originalAjax.hasOwnProperty(prop)) {
      jQuery.ajax[prop] = originalAjax[prop];
    }
  }

  console.log('[API Adapter] Loaded - Old PHP routes will be redirected to new Express API');
})();
