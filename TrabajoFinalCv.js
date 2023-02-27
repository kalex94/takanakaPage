



//FORMACION ACADEMICA
var mostrarInfoAcademica = false;
document.getElementById("formacionAcademica1").innerHTML = "Estudio de grado ( Incompleto ): Licenciada en Geofísica. Facultad de Ciencias Exactas, Físicas y Naturales - Universidad Nacional de San Juan."
document.getElementById("formacionAcademica").addEventListener("click", function() {
    if (mostrarInfoAcademica) {
        document.getElementById("formacionAcademica").classList.remove("boton-abierto")
        document.getElementById("abrirFormacionAcademica").style.display = "none";
        mostrarInfoAcademica = false;
    } else {
        document.getElementById("formacionAcademica").classList.add("boton-abierto")
        document.getElementById("abrirFormacionAcademica").style.display = "block";
        mostrarInfoAcademica = true;
    }
})



// Boton Posicion actual
var mostrandoPosicionActual = false
document.getElementById("posicionActual1").innerHTML = "- UNSJ – Estudiante avanzado de la Lic. En Geofísica."
document.getElementById("posicionActual2").innerHTML = "- SEG (Society of exploration geophysicists) – Presidente - capitulo estudiantil UNSJ."
document.getElementById("posicionActual3").innerHTML = "- Adscrito en la cátedra de Teoría de Ondas. Facultad de Ciencias Exactas, Físicas y Naturales, UNSJ."
document.getElementById("posicionActual4").innerHTML = "- Alumno Tutór de geofísica. Facultad de Ciencias Exactas, Físicas y Naturales, UNSJ."
document.getElementById("posicionActual").addEventListener("click", function() {
    if (mostrandoPosicionActual) {
        document.getElementById("posicionActual").classList.remove("boton-abierto")
        document.getElementById("abrirPosicionActual").style.display = "none";
    
        mostrandoPosicionActual = false;
} else {
    document.getElementById("posicionActual").classList.add("boton-abierto")

    document.getElementById("abrirPosicionActual").style.display = "block";
    
    mostrandoPosicionActual = true;
  }
})

//Boton Antecedentes Docentes
var mostrandoAntecedentesDocentes = false
document.getElementById("fecha1AD").innerHTML = "- Marzo 2022 – Actualidad : Adscrito en la cátedra de Teoría de Ondas. Facultad de Ciencias Exactas, Físicas y Naturales, UNSJ."
document.getElementById("antecedentesDocentes").addEventListener("click", function() {
    if (mostrandoAntecedentesDocentes) {
        document.getElementById("antecedentesDocentes").classList.remove("boton-abierto")
        document.getElementById("abrirAntecedentesDocentes").style.display = "none";
        
        mostrandoAntecedentesDocentes = false;
    } else {
        document.getElementById("antecedentesDocentes").classList.add("boton-abierto")
        document.getElementById("abrirAntecedentesDocentes").style.display = "block";

        mostrandoAntecedentesDocentes = true;
    }
})



//Boton Antecedentes No Docentes
var mostrandoAntecedentesNoDocentes = false
document.getElementById("fecha1A").innerHTML = "- Marzo 2021 – Marzo 2022: Director de equipo de Logistica y Proyecto, SEG student chater UNSJ. "
document.getElementById("fecha2A").innerHTML = "- Marzo 2022 – Actualidad:Presidente SEG student chater UNSJ."
document.getElementById("fecha3A").innerHTML = "- Febrero 2022 – Actualidad: Alumno Tutór de geofísica. Facultad de Ciencias Exactas, Físicas y Naturales, UNSJ."


document.getElementById("antecedentesNoDocentes").addEventListener("click", function() {
        if (mostrandoAntecedentesNoDocentes) {
            document.getElementById("antecedentesNoDocentes").classList.remove("boton-abierto")
            document.getElementById("abrirAntecedentesNoDocentes").style.display = "none";
    

            mostrandoAntecedentesNoDocentes = false;
        } else {
            document.getElementById("antecedentesNoDocentes").classList.add("boton-abierto")
            document.getElementById("abrirAntecedentesNoDocentes").style.display = "block";
            
            mostrandoAntecedentesNoDocentes = true;
        }
})



//Boton participacion de proyectos cientificos
var mostrandoParticipacionProyectosCientificos = false

document.getElementById("fecha1P").innerHTML = "01/2020 – 01/2021 : "
document.getElementById("tipoDeActividad1P").innerHTML = "TIPO DE ACTIVIDAD: Participación en proyecto"
document.getElementById("descripcionDeLaActividad1P").innerHTML = "DESCRIPCION DE LA ACTIVIDAD: Estudio comparativo entre calicatas EM y en CC para detección de bordes de cuenca y localización de anomalías del subsuelo a poca profundidad. "
document.getElementById("institucion1P").innerHTML = "INSTITUCION: FACULTAD DE CS.EXACTAS FISICAS Y NATURALES ; UNIVERSIDAD NACIONAL DE SAN JUAN"
document.getElementById("fecha2P").innerHTML = "01/2020 – 01/2021 :"
document.getElementById("tipoDeActividad2P").innerHTML = "Tipo de actividad: Participación en proyecto"
document.getElementById("descripcionDeLaActividad2P").innerHTML = "Descripción de la actividad: Caracterización térmica y estructural a partir de datos gravi-magnetométricos e imágenes satelitales, orientada a explorar nuevos horizontes con potencial geotérmico en el Noroeste Argentino.) "
document.getElementById("institucion2P").innerHTML = "Institución: FACULTAD DE CS.EXACTAS FISICAS Y NATURALES ; UNIVERSIDAD NACIONAL DE SAN JUAN. "
document.getElementById("fecha3P").innerHTML = "07/01/2023 – 17/01/2023:"
document.getElementById("tipoDeActividad3P").innerHTML = "Tipo de actividad: Participación en proyecto"
document.getElementById("descripcionDeLaActividad3P").innerHTML = "Descripción de actividad: Despliegues sísmicos para el proyecto TANGO -TransANDean Great Orogeny- financiado por National Science Fundation EAR-2020935."
document.getElementById("institucion3P").innerHTML = "Institución: THE UNIVERSITY OF ARIZONA"

document.getElementById("participacionProyectosCientificos").addEventListener("click", function() {
    if (mostrandoParticipacionProyectosCientificos) {
        document.getElementById("participacionProyectosCientificos").classList.remove("boton-abierto")

        document.getElementById("abrirParticipacionDeProyectosCienteficos").style.display = "none";   
        mostrandoParticipacionProyectosCientificos = false;
    } else {
        document.getElementById("participacionProyectosCientificos").classList.add("boton-abierto")

        document.getElementById("abrirParticipacionDeProyectosCienteficos").style.display = "block";
        mostrandoParticipacionProyectosCientificos = true;
    }
})


// Boton de formacion complementaria
var mostrandoFormacionComplementaria = false
document.getElementById("fechaF1").innerHTML = "03/06/2022 - 05/09/2022: "
document.getElementById("nombreDelCurso").innerHTML = "NOMBRE DEL CURSO: IRIS Seismology Skill Building Workshop"
document.getElementById("cargaHoraria").innerHTML = "CARGA HORARIA: Entre 51 y 100 horas "
document.getElementById("tipoDeCertificacion").innerHTML = "TIPO DE CERTIFICACION: Certificado de aprobación"
document.getElementById("institucionQueRealizaElCurso").innerHTML = "INSTITUCION EN QUE SE REALIZA EL CURSO: IRIS"
document.getElementById("contenido").innerHTML = "CONTENIDO: Linux, Sac, Python (e.g., NumPy, Matplotlib, Panda, Obspy))"


document.getElementById("formacionComplementaria").addEventListener("click", function() {
    if (mostrandoFormacionComplementaria) {
        document.getElementById("formacionComplementaria").classList.remove("boton-abierto")
        document.getElementById("abrirFormacionComplementaria").style.display = "none";
    
        mostrandoFormacionComplementaria = false;
    } else {
        document.getElementById("formacionComplementaria").classList.add("boton-abierto")

        document.getElementById("abrirFormacionComplementaria").style.display = "block";
        
        mostrandoFormacionComplementaria = true;
    }


})



// Boton de formacion Idiomas
var mostrandoInformacionComplementariaIdiomas = false
document.getElementById("idioma1").innerHTML = "INGLES"
document.getElementById("idioma1-1").innerHTML = "Universidad Nacional de San Juan"
document.getElementById("idioma1-2").innerHTML = "NIVEL (A2) "
document.getElementById("idioma2").innerHTML = "PORTUGUÉS: "
document.getElementById("idioma2-1").innerHTML = "Institución emisora de certificado: Universidad Provincial de Ezeiza"
document.getElementById("idioma2-2").innerHTML = "NIVEL (A2)"

document.getElementById("informacionComplementariaIdiomas").addEventListener("click", function() {
    if (mostrandoInformacionComplementariaIdiomas) {
        document.getElementById("informacionComplementariaIdiomas").classList.remove("boton-abierto")

        document.getElementById("abrirInformacionComplementariaIdiomas").style.display = "none";
    
        mostrandoInformacionComplementariaIdiomas = false;
    } else {
        document.getElementById("informacionComplementariaIdiomas").classList.add("boton-abierto")

        document.getElementById("abrirInformacionComplementariaIdiomas").style.display = "block";
        
        mostrandoInformacionComplementariaIdiomas = true;
    }

})
// Boton de contacto
var mostrandocontacto = false
document.getElementById("demo1").innerHTML = "E-mail: nahuelxbalderramo@gmail.com   "
document.getElementById("demo2").innerHTML = "Celular: +54-2644154825   "
document.getElementById("demo3").innerHTML = "Lugar de residencia: San Juan - Argentina "


document.getElementById("contacto").addEventListener("click", function() {
    if (mostrandocontacto) {
        document.getElementById("contacto").classList.remove("boton-abierto")

        document.getElementById("abrirBoton").style.display = "none";
    
        mostrandocontacto = false;
    } else {
        document.getElementById("contacto").classList.add("boton-abierto")

        document.getElementById("abrirBoton").style.display = "block";
        
        mostrandocontacto = true;
    }

})

