function poblarInformeErgo(data) {
    const nombreCompleto = `${data.informe.atleta.nombre} ${data.informe.atleta.apellido}`;
    setearTexto('athlete-name-metabolico', nombreCompleto);
    setearTexto('athlete-name-esfuerzo', nombreCompleto);
    setearTexto('athlete-name-deportivo', nombreCompleto);
    setearTexto('fecha-prueba-esfuerzo', formatearFecha(data.informe.fecha));
    setearTexto('fecha-prueba-deportivo', formatearFecha(data.informe.fecha));
    setearTexto('medico-nombre', data.informe.medico || '');
    setearTexto('protocolo-nombre', data.informe.protocolo);
    const imgElement = document.getElementById('selectedImg1');
    if (imgElement && data.informe.atleta.foto) {
        imgElement.src = `../../../assets/${data.informe.atleta.foto}`;
    }
    const cc = data.composicion_corporal;
    setearTexto('comentario-composicion-corporal', cc.comentario);
    setearTexto('peso-corporal', cc.peso_kg);
    setearTexto('estatura', cc.estatura_cm);
    setearTexto('imc', formatearDecimal(cc.imc, 1));
    setearTexto('porcentaje-grasa', cc.porcentaje_grasa);
    setearTexto('porcentaje-musculo', formatearDecimal(cc.porcentaje_musculo, 1));
    setearTexto('peso-graso', formatearDecimal(cc.peso_graso_kg, 1));
    setearTexto('peso-muscular', cc.peso_muscular_kg);
    const ger = data.gasto_energetico_reposo;
    setearTexto('vo2-promedio', formatearDecimal(ger.vo2_promedio, 1));
    setearTexto('fc-reposo', ger.fc_reposo);
    setearTexto('gasto-diario-kcal', ger.gasto_diario_kcal);
    setearTexto('mets', formatearDecimal(ger.mets, 2));
    setearTexto('mets-ajustados', formatearDecimal(ger.mets_ajustados, 2));
    setearTexto('rq', formatearDecimal(ger.rq, 2));
    setearTexto('cho-porcentaje', ger.cho_porcentaje);
    setearTexto('grasa-porcentaje', ger.grasa_porcentaje);
    setearTexto('cho-gramos-dia', ger.cho_gramos_dia);
    setearTexto('grasa-gramos-dia', ger.grasa_gramos_dia);
    setearTexto('grasa-esperada', ger.grasa_esperada_porcentaje);
    setearTexto('muscular-peso-ideal', formatearDecimal(ger.muscular_peso_ideal_porcentaje, 1));
    setearTexto('masa-grasa-perder', ger.masa_grasa_perder_kg || '');
    setearTexto('peso-ideal', formatearDecimal(ger.peso_ideal_kg, 1));
    setearTexto('comentario-gasto-energetico', ger.comentario);
    if (data.grafica_prioridad && data.grafica_prioridad.series) {
        actualizarGraficoPolar(data.grafica_prioridad.series);
    }
}
function actualizarGraficoPolar(series) {
    const chart = Highcharts.charts.find(c => c && c.renderTo.id === 'container');

    if (chart) {
        series.forEach((serie, index) => {
            if (chart.series[index]) {
                chart.series[index].setData(serie.data);
                chart.series[index].update({
                    name: serie.name,
                    lineColor: serie.lineColor
                });
            }
        });
    }
}
function poblarInformeLactato(data) {
    const nombreCompleto = `${data.informe.atleta.nombre} ${data.informe.atleta.apellido}`;
    setearTexto('athlete-name-lactato', nombreCompleto);
    setearTexto('fecha-prueba-lactato', formatearFecha(data.informe.fecha));
    const imgElement = document.getElementById('selectedImg1');
    if (imgElement && data.informe.atleta.foto) {
        imgElement.src = `../../../assets/${data.informe.atleta.foto}`;
    }
    poblarDatosPrueba('ritmo-data-container', data.datos_prueba.ritmo_min_100);
    poblarDatosPrueba('fc-data-container', data.datos_prueba.fc_ppm);
    poblarDatosPrueba('lactato-data-container', data.datos_prueba.lactato_mmol);
    poblarDatosPrueba('rpe-data-container', data.datos_prueba.rpe_0_10);
    if (data.analisis && data.analisis.zonas) {
        data.analisis.zonas.forEach(zona => {
            const zNum = zona.zona;
            setearTexto(`zona${zNum}-numero`, zNum);
            setearTexto(`zona${zNum}-ritmo`, zona.ritmo_index);
            setearTexto(`zona${zNum}-fc`, zona.fc);
            setearTexto(`zona${zNum}-lactato`, formatearDecimal(zona.lactato, 1));
        });
    }
    if (data.grafica) {
        actualizarGraficoLactato(data.grafica);
    }
}
function poblarDatosPrueba(containerId, valores) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = valores.map(v =>
        `<label class="datosDelTest">${v}</label>`
    ).join('');
}
function actualizarGraficoLactato(grafica) {
    const chart = Highcharts.charts.find(c => c && c.renderTo.id === 'container');

    if (chart && grafica.series) {
        grafica.series.forEach((serie, index) => {
            if (chart.series[index]) {
                chart.series[index].setData(serie.data);
            }
        });
    }
}
function poblarMacrociclo(data) {
    setearTexto('macrociclo-atleta-nombre', data.macrociclo.atleta.nombre);
    setearTexto('macrociclo-codigo', data.macrociclo.codigo);
    const perfilSelect = document.getElementById('mesocyclesmesocycle-profile_id');
    if (perfilSelect && data.macrociclo.perfil) {
        perfilSelect.value = data.macrociclo.perfil.id;
    }
}
function poblarMesociclo(data) {
    setearTexto('mesociclo-atleta-nombre', data.mesociclo.atleta.nombre);
    setearTexto('mesociclo-codigo', data.mesociclo.codigo);

    const perfilSelect = document.getElementById('mesocyclesmesocycle-profile_id');
    if (perfilSelect && data.mesociclo.perfil) {
        perfilSelect.value = data.mesociclo.perfil.id;
    }
}
function poblarMicrociclo(data) {
    setearTexto('microciclo-atleta-nombre', data.microciclo.atleta.nombre);
    setearTexto('microciclo-codigo', data.microciclo.codigo);
}
function setearTexto(id, valor, valorPorDefecto = '') {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.textContent = valor !== null && valor !== undefined
            ? valor
            : valorPorDefecto;
    }
}
function formatearDecimal(numero, decimales = 1) {
    if (numero === null || numero === undefined) return '';
    return Number(numero).toFixed(decimales);
}
function formatearFecha(fechaISO) {
    if (!fechaISO) return '';

    const partes = fechaISO.split('-');
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dia = parseInt(partes[2]);
    const mes = meses[parseInt(partes[1]) - 1];
    const año = partes[0];

    return `${dia} de ${mes} del ${año}`;
}
async function cargarInformeErgo(idInforme) {
    try {
        const response = await fetch(`/api/informes/ergo/${idInforme}`);

        if (!response.ok) {
            throw new Error('Error al cargar el informe');
        }

        const data = await response.json();
        if (!validarInformeErgo(data)) {
            throw new Error('Datos del informe inválidos');
        }
        poblarInformeErgo(data);

    } catch (error) {
        console.error('Error:', error);
        mostrarError('No se pudo cargar el informe');
    }
}
async function cargarInformeLactato(idInforme) {
    try {
        const response = await fetch(`/api/informes/lactato/${idInforme}`);
        const data = await response.json();

        if (!validarInformeLactato(data)) {
            throw new Error('Datos del informe inválidos');
        }

        poblarInformeLactato(data);

    } catch (error) {
        console.error('Error:', error);
        mostrarError('No se pudo cargar el informe de lactato');
    }
}
function validarInformeErgo(data) {
    if (!data.informe || !data.composicion_corporal || !data.gasto_energetico_reposo) {
        console.error('Faltan propiedades principales en los datos');
        return false;
    }
    const cc = data.composicion_corporal;
    if (cc.peso_kg < 30 || cc.peso_kg > 200) {
        console.warn('Peso fuera de rango razonable');
    }

    if (cc.imc < 10 || cc.imc > 50) {
        console.warn('IMC fuera de rango razonable');
    }

    return true;
}
function validarInformeLactato(data) {
    if (!data.informe || !data.datos_prueba) {
        console.error('Faltan propiedades principales en los datos');
        return false;
    }
    const dp = data.datos_prueba;
    const longitud = dp.ritmo_min_100.length;

    if (dp.fc_ppm.length !== longitud ||
        dp.lactato_mmol.length !== longitud ||
        dp.rpe_0_10.length !== longitud) {
        console.error('Los arrays de datos de prueba tienen diferentes longitudes');
        return false;
    }

    return true;
}
function mostrarError(mensaje) {
    alert(mensaje);
}
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    if (path.includes('ERGOESPIROMETRICO.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const idInforme = urlParams.get('id');

        if (idInforme) {
            cargarInformeErgo(idInforme);
        }
    } else if (path.includes('INFORME LACTATO.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const idInforme = urlParams.get('id');

        if (idInforme) {
            cargarInformeLactato(idInforme);
        }
    }
});
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        poblarInformeErgo,
        poblarInformeLactato,
        poblarMacrociclo,
        poblarMesociclo,
        poblarMicrociclo,
        cargarInformeErgo,
        cargarInformeLactato
    };
}
