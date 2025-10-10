#!/usr/bin/env python3
"""
Script para actualizar la navbar en todos los archivos HTML del proyecto
Aplica los cambios de simplificación: elimina idiomas, lecciones, y opciones innecesarias
"""

import glob
import re

def update_navbar(file_path):
    """Actualiza la navbar en un archivo HTML"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Eliminar selector de idioma (el bloque completo del li con dropdown de idiomas)
        # Buscar desde <li class="nav-item dropdown hidden-caret"> con "Ajuste de idiomas"
        # hasta el cierre </li>
        idioma_pattern = r'<li class="nav-item dropdown hidden-caret">\s*<a class="nav-link"[^>]*title="Ajuste de idiomas"[^>]*>.*?</li>\s*(?=\s*<li|</ul>)'
        content = re.sub(idioma_pattern, '', content, flags=re.DOTALL)
        
        # 2. Eliminar "Lecciones" (similar, el bloque completo)
        lecciones_pattern = r'<li class="nav-item dropdown hidden-caret">\s*<a class="nav-link"[^>]*title="Lecciones"[^>]*>.*?</li>\s*(?=\s*<li|</ul>)'
        content = re.sub(lecciones_pattern, '', content, flags=re.DOTALL)
        
        # 3. Eliminar "Sesión" del menú Entrenamientos
        sesion_pattern = r'<a class="col-6 col-md-4 p-0" href="[^"]*SESION[^"]*"[^>]*>.*?</a>'
        content = re.sub(sesion_pattern, '', content, flags=re.DOTALL)
        
        # 4. Eliminar "Progresión" del menú Entrenamientos
        progresion_pattern = r'<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<img src="[^"]*m_progresion\.png"[^>]*>.*?</div></a>'
        content = re.sub(progresion_pattern, '', content, flags=re.DOTALL)
        
        # 5. Eliminar "Personal" del menú Entrenamientos  
        personal_pattern = r'<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<i class="far fa-folder-open"[^>]*>.*?<span class="text">Personal</span>.*?</div></a>'
        content = re.sub(personal_pattern, '', content, flags=re.DOTALL)
        
        # 6. Eliminar "Perfiles" del menú principal
        perfiles_pattern = r'<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<img src="[^"]*m_perfil\.png"[^>]*>.*?<span class="text">Perfiles</span>.*?</div></a>'
        content = re.sub(perfiles_pattern, '', content, flags=re.DOTALL)
        
        # 7. Eliminar "Dashboard" del menú principal
        dashboard_pattern = r'<a class="col-6 col-md-4 p-0" href="#"><div class="quick-actions-item">\s*<img src="[^"]*m_dash\.png"[^>]*>.*?<span class="text">Dashboard</span>.*?</div></a>'
        content = re.sub(dashboard_pattern, '', content, flags=re.DOTALL)
        
        # 8. Eliminar "Patrocinios" del menú de perfil (y dejar solo "Salir")
        patrocinios_pattern = r'<div class="dropdown-divider"></div>\s*<a class="dropdown-item" href="#">Patrocinios</a>\s*<div class="dropdown-divider"></div>'
        content = re.sub(patrocinios_pattern, '<div class="dropdown-divider"></div>', content)
        
        # 9. Actualizar enlaces de Salir para usar logout()
        salir_pattern = r'<a class="dropdown-item" href="[^"]*login\.html"[^>]*>Salir</a>'
        content = re.sub(salir_pattern, '<a class="dropdown-item" href="javascript:void(0)" onclick="logout()" style="color:#777; font-weight:400;">Salir</a>', content)
        
        # 10. Corregir rutas INICIO.html -> index.html
        content = content.replace('href="../INICIO.html"', 'href="../index.html"')
        content = content.replace('href="../../INICIO.html"', 'href="../../index.html"')
        content = content.replace('href="INICIO.html"', 'href="index.html"')
        
        # Solo escribir si hubo cambios
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Actualizado: {file_path}")
            return True
        else:
            print(f"○ Sin cambios: {file_path}")
            return False
            
    except Exception as e:
        print(f"✗ Error en {file_path}: {e}")
        return False

def main():
    # Obtener todos los archivos HTML excepto login.html y archivos de assets
    all_html_files = glob.glob('**/*.html', recursive=True)
    
    # Filtrar archivos que no queremos modificar
    files_to_update = [
        f for f in all_html_files 
        if 'login.html' not in f 
        and '/assets/' not in f 
        and '/attached_assets/' not in f
        and 'node_modules' not in f
    ]
    
    print(f"Encontrados {len(files_to_update)} archivos HTML para actualizar\n")
    
    updated = 0
    for file_path in sorted(files_to_update):
        if update_navbar(file_path):
            updated += 1
    
    print(f"\n✓ Proceso completado: {updated} archivos actualizados de {len(files_to_update)} totales")

if __name__ == '__main__':
    main()
