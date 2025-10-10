#!/usr/bin/env node
/**
 * Script para actualizar la navbar en todos los archivos HTML del proyecto
 * Aplica los cambios de simplificación: elimina idiomas, lecciones, y opciones innecesarias
 */

const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // Ignorar directorios específicos
            if (!file.startsWith('.') && file !== 'node_modules' && file !== 'assets' && file !== 'attached_assets') {
                findHtmlFiles(filePath, fileList);
            }
        } else if (file.endsWith('.html') && file !== 'login.html') {
            fileList.push(filePath);
        }
    });
    
    return fileList;
}

function updateNavbar(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // 1. Eliminar selector de idioma
        const idiomaPattern = /<li class="nav-item dropdown hidden-caret">\s*<a class="nav-link"[^>]*title="Ajuste de idiomas"[^>]*>[\s\S]*?<\/li>\s*(?=\s*<li|<\/ul>)/g;
        content = content.replace(idiomaPattern, '');
        
        // 2. Eliminar "Lecciones"
        const leccionesPattern = /<li class="nav-item dropdown hidden-caret">\s*<a class="nav-link"[^>]*title="Lecciones"[^>]*>[\s\S]*?<\/li>\s*(?=\s*<li|<\/ul>)/g;
        content = content.replace(leccionesPattern, '');
        
        // 3. Eliminar "Sesión" del menú Entrenamientos
        const sesionPattern = /<a class="col-6 col-md-4 p-0" href="[^"]*SESION[^"]*"[^>]*>[\s\S]*?<\/a>/g;
        content = content.replace(sesionPattern, '');
        
        // 4. Eliminar "Progresión" del menú Entrenamientos
        const progresionPattern = /<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<img src="[^"]*m_progresion\.png"[^>]*>[\s\S]*?<\/div><\/a>/g;
        content = content.replace(progresionPattern, '');
        
        // 5. Eliminar "Personal" del menú Entrenamientos  
        const personalPattern = /<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<i class="far fa-folder-open"[^>]*>[\s\S]*?<span class="text">Personal<\/span>[\s\S]*?<\/div><\/a>/g;
        content = content.replace(personalPattern, '');
        
        // 6. Eliminar "Perfiles" del menú principal
        const perfilesPattern = /<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<img src="[^"]*m_perfil\.png"[^>]*>[\s\S]*?<span class="text">Perfiles<\/span>[\s\S]*?<\/div><\/a>/g;
        content = content.replace(perfilesPattern, '');
        
        // 7. Eliminar "Dashboard" del menú principal
        const dashboardPattern = /<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<img src="[^"]*m_dash\.png"[^>]*>[\s\S]*?<span class="text">Dashboard<\/span>[\s\S]*?<\/div><\/a>/g;
        content = content.replace(dashboardPattern, '');
        
        // 8. Eliminar "Patrocinios" del menú de perfil
        const patrociniosPattern = /<div class="dropdown-divider"><\/div>\s*<a class="dropdown-item" href="#">Patrocinios<\/a>\s*<div class="dropdown-divider"><\/div>/g;
        content = content.replace(patrociniosPattern, '<div class="dropdown-divider"></div>');
        
        // 9. Actualizar enlaces de Salir para usar logout()
        const salirPattern = /<a class="dropdown-item" href="[^"]*login\.html"[^>]*>Salir<\/a>/g;
        content = content.replace(salirPattern, '<a class="dropdown-item" href="javascript:void(0)" onclick="logout()" style="color:#777; font-weight:400;">Salir</a>');
        
        // 10. Corregir rutas INICIO.html -> index.html  
        content = content.replace(/href="\.\.\/INICIO\.html"/g, 'href="../index.html"');
        content = content.replace(/href="\.\.\/\.\.\/INICIO\.html"/g, 'href="../../index.html"');
        content = content.replace(/href="INICIO\.html"/g, 'href="index.html"');
        
        // Solo escribir si hubo cambios
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Actualizado: ${filePath}`);
            return true;
        } else {
            console.log(`○ Sin cambios: ${filePath}`);
            return false;
        }
        
    } catch (error) {
        console.log(`✗ Error en ${filePath}: ${error.message}`);
        return false;
    }
}

function main() {
    try {
        // Obtener todos los archivos HTML
        const filesToUpdate = findHtmlFiles('.');
        
        console.log(`Encontrados ${filesToUpdate.length} archivos HTML para actualizar\n`);
        
        let updated = 0;
        filesToUpdate.sort().forEach(filePath => {
            if (updateNavbar(filePath)) {
                updated++;
            }
        });
        
        console.log(`\n✓ Proceso completado: ${updated} archivos actualizados de ${filesToUpdate.length} totales`);
        
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
