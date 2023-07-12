// JavaScript Document

//***************CONSTANTES ***********************/
/*
const ordenes = {
    Gelisol : "Suelos con permafrost o materiales gélicos.",
    Histosol : "Suelos sin propiedades ándicas y materiales orgánicos.",
    Spodosol : "Suelos con un horizonte espódico o materiales espódicos.",
    Andisol : "Suelos con propiedades ándicas.",
    Oxisol : "Suelos con un horizonte óxico.",
    Vertisol : "Suelos con alto contenido de arcillas expandibles y grietas cuando están secos.",
    Aridisol : "Régimen de humedad arídico o horizonte sálico.",
    Ultisol : "Suelos con un horizonte argílico y bajo porcentaje de saturación de bases",
    Mollisol : "Suelos con un epipedión móllico y alto porcentaje de saturación de bases.",
    Alfisol : "Suelos sin epipedión plaggen y con horizonte argílico, kándico o nátrico.",
    Inceptisol : "Suelos con escaso desarrollo de horizontes puede tener cámbicos y úmbricos.",
    Entisol : "Otros suelos",
    Vacio : ""
};
*/
const ordenes = {
    Gelisol : "Soils with permafrost or gelic materials.",
    Histosol : "Soils without andic properties and organic materials.",
    Spodosol : "Soils with a spodic horizon or spodic materials.",
    Andisol : "Soils with andic properties.",
    Oxisol : "Soils with an oxic horizon.",
    Vertisol : "Soils with high content of expandable clays and cracks when dry.",
    Aridisol : "Aridic moisture regime or salic horizon.",
    Ultisol : "Soils with an argillic horizon and low percentage of base saturation",
    Mollisol : "Soils with a mollic epipedon and high percentage of base saturation.",
    Alfisol : "Soils without plaggen epipedon and with argillic, kandic or natric horizon.",
    Inceptisol : "Soils with little horizon development can have cambics and umbrics.",
    Entisol : "Other soils",
    Vacio : ""
};
const elementoFormativo = {
    Gelisol:"el", 
    Histosol:"ist", 
    Spodosol: "od", 
    Andisol:"and", 
    Oxisol:"ox", 
    Vertisol:"ert", 
    Aridisol:"id", 
    Ultisol:"ult", 
    Mollisol:"oll", 
    Alfisol:"alf", 
    Inceptisol:"ept",
    Entisol:"ent"
};


const subordenDe = {
    Gelisol : `
        <option value="hist">Hist</option>
        <option value="orth">Orth</option>
        <option value="turb">Turb</option> 
    `,
    Histosol : `
        <option value="fibr">Fibr</option>
        <option value="fol">Fol</option>
        <option value="hem">Hem</option> 
        <option value="sapr">Sapr</option>
        <option value="wass">Wass</option>
    `,
    Spodosol : `
        <option value="aqu">Aqu</option>
        <option value="cry">Cry</option>
        <option value="gel">Gel</option> 
        <option value="hum">Hum</option>
        <option value="orth">Orth</option> 
    `,
    Andisol : `
        <option value="aqu">Aqu</option>
        <option value="cry">Cry</option>
        <option value="gel">Gel</option> 
        <option value="torr">Torr</option>
        <option value="ud">Ud</option>
        <option value="ust">Ust</option>
        <option value="vitr">Vitr</option> 
        <option value="xer">Xer</option> 
    `,
    Oxisol : `
        <option value="aqu">Aqu</option>
        <option value="per">Per</option> 
        <option value="torr">Torr</option>
        <option value="ud">Ud</option>
        <option value="ust">Ust</option>
    `,
    Vertisol : `
        <option value="aqu">Aqu</option>
        <option value="cry">Cry</option>
        <option value="torr">Torr</option>
        <option value="ud">Ud</option>
        <option value="ust">Ust</option>
        <option value="xer">Xer</option>
    `,
    Aridisol : `
        <option value="arg">Arg</option>
        <option value="calc">Calc</option>
        <option value="camb">Camb</option> 
        <option value="cry">Cry</option>
        <option value="dur">Dur</option>
        <option value="gyps">Gyps</option> 
        <option value="sal">Sal</option> 
    `,
    Ultisol : `
        <option value="aqu">Aqu</option>
        <option value="hum">Hum</option>
        <option value="ud">Ud</option>
        <option value="ust">Ust</option>
        <option value="xer">Xer</option> 
    `,
    Mollisol : `
        <option value="alb">Alb</option>
        <option value="aqu">Aqu</option>
        <option value="cry">Cry</option>
        <option value="gel">Gel</option> 
        <option value="rend">Rend</option> 
    `,
    Alfisol : `
        <option value="aqu">Aqu</option>
        <option value="cry">Cry</option>
        <option value="ud">Ud</option>
        <option value="ust">Ust</option>
        <option value="xer">Xer</option> 
    `,
    Inceptisol : `
        <option value="aqu">Aqu</option>
        <option value="cry">Cry</option>
        <option value="gel">Gel</option>  
        <option value="ud">Ud</option>
        <option value="ust">Ust</option>
        <option value="xer">Xer</option> 
    `,
    Entisol : `
        <option value="aqu">Aqu</option>
        <option value="fluv">Fluv</option>
        <option value="orth">Orth</option> 
        <option value="orth">Orth</option> 
        <option value="psamm">Psamm</option> 
        <option value="wass">Wass</option> 
    `,
    Vacio : ``
};

/*
const subordenes = {
    alb : "Presencia de un horizonte álbico ",
    aqu : "Condiciones Ácuicas",
    arg : "Presencia de un horizonte argílico",
    calc : "Presencia de un horizonte cálcico",
    camb : "Presencia de un horizonte cámbico",
    cry : "Frio - condiciones críicas",
    dur : "Presencia de duripan",
    fibr : "Baja descomposición de materia orgánica",
    fluv : "Zona de inundación plana",
    fol : "Hojarasca",
    gel : "Régimen de temperatura Gélico",
    gyps : "Presencia de un horizonte gypsico",
    hem : "Descomposición intermedia de materia orgánica",
    hist : "Presencia de materiales orgánicos",
    hum : "Presencia de materia orgánica",
    orth : "Común",
    per : "Régimen de humedad perúdico",
    psamm : "Textura arenosa",
    rend : "Alto contenido en Carbonatos",
    sal : "Presencia de un horizonte sálico",
    sapr : "Alta descomposición de materia orgánica",
    torr : "Régimen de humedad tórrico",
    turb : "Presencia de Crioturbación",
    ud : "Régimen de humedad údico",
    ust : "Régimen de humedad ústico",
    vitr : "Presencia de vidrios volcánicos",
    xer : "Régimen de humedad xérico",
    wass : "Potencial de agua positivo más de 21 horas al día"
};*/
const subordenes = {
    alb : "Presence of an albic horizon",
    aqu : "Aquic conditions",
    arg : "Presence of an argillic horizon",
    calc : "Presence of a calcic horizon",
    camb : "Presence of a cambic horizon",
    cry : "Cold - critical conditions",
    dur : "Presence of duripan",
    fibr : "Low decomposition of organic matter",
    fluv : "Flat flood zone",
    fol : "Leaf litter",
    gel : "Gelic temperature regime",
    gyps : "Presence of a gypsic horizon",
    hem : "Intermediate decomposition of organic matter",
    hist : "Presence of organic materials",
    hum : "Presence of organic matter",
    orth : "Common",
    per : "Perudic moisture regime",
    psamm : "Sandy texture",
    rend : "High carbonate content",
    sal : "Presence of a salic horizon",
    sapr : "High decomposition of organic matter",
    torr : "Torric moisture regime",
    turb : "Presence of cryoturbation",
    ud : "Udic moisture regime",
    ust : "Ustic moisture regime",
    vitr : "Presence of volcanic glasses",
    xer : "Xeric moisture regime",
    wass : "Positive water potential more than 21 hours a day"
};



/** TODOS LOS GRANDES GRUPOS***/ 
const granGrupos = [
    "acr", "al", "alb", "anhy", "aqu", "argi",
    "calc", "cry", "dur", "dystr", "endo", "epi", 
    "eutr", "ferr", "fibr", "fluv", "fol", "frag",
    "fragloss", "fras", "fulv", "gel", "glac", "gloss",
    "gyps", "hal", "hapl", "hem", "hist", "hum",
    "hydr", "kand", "kanhapl", "luv", "melan", "moll",
    "natr", "pale", "petr", "plac", "plinth", "psamm",
    "quartz", "rhod", "sal", "sapr", "somb", "sphagn",
    "sulf", "torr", "ud", "umbr", "ust", "verm",
    "vitr", "xer"
];

/*
const carGranGrupos = {
    acr: "Meteorización extrema",
    al: "Alto contenido en Aluminio y bajo en hierro",
    alb: "Presencia horizonte álbico",
    anhy: "Muy seco",
    aqu: "Condiciones ácuicas", 
    argi: "Presencia horizonte árgílico",
    calc: "Presencia horizonte Cálcico",
    cry: "Frio - condiciones críicas",
    dur: "Un duripan",
    dystr: "Saturación de bases baja",
    endo: "Presencia de capa freática",
    epi: "Presencia de capa freática colgada",
    eutr: "Alta saturación de bases",
    ferr: "Presencia de hierro",
    fibr: "Baja descomposición de materia orgánica",
    fluv: "Zona de inundación plana",
    fol: "Hojarasca",
    frag: "Presencia de fragipán",
    fragloss: "Características de 'Frag y Gloss'",
    fras: "CE 1:5 inferior a 0,2 dS/m",
    fulv: "Color marrón oscuro, presencia de carbono orgánico",
    gel: "Régimen de temperatura gélico",
    glac: "Cristales de hielo o cuñas",
    gloss: "Presencia horizonte glósico",
    gyps: "Presencia horizonte gypsico",
    hal: "Condiciones salinas",
    hapl: "Mínimo desarrollo de horizontes",
    hem: "Descomposición intermedia de materia orgánica",
    hist: "Presencia epipedión hístico",
    hum: "Presencia de materia orgánica",
    hydr: "Presencia de agua",
    kand: "Minerales de arcilla tipo 1:1",
    kanhapl: "Características de 'Kand y Hapl'",
    luv: "Iluvial",
    melan: "Color negro, presencia de carbono orgánico",
    moll: "Presencia epipedión móllico",
    natr: "Presencia horizonte nátrico",
    pale: "Desarrollo excesivo",
    petr: "Horizonte cementado",
    plac: "Presencia horizonte plácico",
    plinth: "Presencia de plintita",
    psamm: "Textura arenosa",
    quartz: "Alto contenido en cuarzo",
    rhod: "Color rojo oscuro",
    sal: "Presencia horizonte sálico",
    sapr: "Alta descomposición de materia orgánica",
    somb: "Presencia horizonte sómbrico",
    sphagn: "Presencia de sphagnum",
    sulfi: "Presencia de materiales sulfídicos",
    sulfo: "un horizonte sulfúrico",
    torr: "Régimen de humedad tórrico",
    ud: "Régimen de humedad údico",
    umbr: "Presencia epipedión úmbrico",
    ust: "Régimen de humedad ústico",
    verm: "Presencia de gusanos o mezclado por animales",
    vitr: "Presencia de vidrios volcánicos",
    xer:"Régimen de Humedad xérico"
};
*/
const carGranGrupos = {
    acr: "Extreme weathering",
    al: "High aluminum and low iron content",
    alb: "Presence of albic horizon",
    anhy: "Very dry",
    aqu: "Aquic conditions",
    argi: "Presence of argillic horizon",
    calc: "Presence of calcic horizon",
    cry: "Cold - critical conditions",
    dur: "A duripan",
    dystr: "Low base saturation",
    endo: "Presence of water table",
    epi: "Presence of hanging water table",
    eutr: "High base saturation",
    ferr: "Presence of iron",
    fibr: "Low decomposition of organic matter",
    fluv: "Flat flood zone",
    fol: "Leaf litter",
    frag: "Presence of fragipan",
    fragloss: "Characteristics of 'Frag and Gloss'",
    fras: "EC 1:5 less than 0.2 dS/m",
    fulv: "Dark brown color, presence of organic carbon",
    gel: "Gelic temperature regime",
    glac: "Ice crystals or wedges",
    gloss: "Presence of glosic horizon",
    gyps: "Presence of gypsic horizon",
    hal: "Salty conditions",
    hapl: "Minimum horizon development",
    hem: "Intermediate decomposition of organic matter",
    hist: "Presence of histic epipedon",
    hum: "Presence of organic matter",
    hydr: "Presence of water",
    kand: "1:1 type clay minerals",
    kanhapl: "Characteristics of 'Kand and Hapl'",
    luv: "Iluvial",
    melan: "Black color, presence of organic carbon",
    moll: "Presence of mollic epipedon",
    natr: "Presence of natric horizon",
    pale: "Excessive development",
    petr: "Cemented horizon",
    plac: "Presence of placic horizon",
    plinth: "Presence of plinthite",
    psamm: "Sandy texture",
    quartz: "High quartz content",
    rhod: "Dark red color",
    sal: "Presence of salic horizon",
    sapr: "High decomposition of organic matter",
    somb: "Presence of sombric horizon",
    sphagn: "Presence of sphagnum mosses ",
    sulfi: "Presence of sulfidic materials ",
    sulfo:"a sulfúric horizon ",
    torr:"Tórrico moisture regime ",
    ud:"Udic moisture regime ",
    umbr:"Presence of umbric epipedon ",
    ust:"Ustic moisture regime ",
    verm:"Presence of worms or mixed by animals ",
    vitr:"Presence of volcanic glasses ",
    xer:"Xeric moisture regime "
};

const subGrupos = [
    "Abruptic", "Acraquoxíc","Acrudoxic","Acrustoxic","Aeric","Albaquic","Albaquultic","Albic",
    "Alfic","Alic","Andic","Anhydritic","Anionic","Anthraltic","Anthraquic","Anthrodensic",
    "Anthroic","Anthropic","Anthroportic","Aqualfic","Aquandic","Aquentic","Aqueptic","Aquertic",
    "Aquic","Aquicambidic","Aquodic","Aquollic","Aquultic","Arenic","Argiaquic","Argidic",
    "Argiduridic","Aridic","Calciargidic","Calcic","Calcidic","Cambidic","Chromic","Cumulic",
    "Duric","Durinodic","Dystric","Entic","Eutric","Fibric","Fluvaquentic","Fluventic",
    "Folistic","Fragiaquic","Fragic","Glacic","Glossaquic","Glossic","Grossarenic","Grossic",
    "Gypsic","Halic","Haplargidic","Haplic","Haplocalcidic","Haploduridic","Haploplagic","Haploxeralfic",
    "Haploxerandic","Haplustandic","Hemic","Histic","Humaqueptic","Humic","Hydraquentic","Hydric",
    "Inceptic","Kandic","Kandiudalfic","Kanhaplic","Lamellic","Leptic","Limnic","Lithic",
    "Lithic-Ruptic-Inceptic","Mollic","Natrargidic","Natric","Natrixeralfic","Nitric","Ombroaquic","Oxic",
    "Oxyaquic","Pachic","Paleargidic","Petrocalcic","Petrocalcidic","Petroferric","Petrogypsic","Petronodic",
    "Plinthaquic","Plinthic","Psammentic","Rendollic","Rhodic","Ruptic","Ruptic-Alfic","Ruptic-Entic",
    "Ruptic-Histic","Ruptic-Lithic","Ruptic-Ultic","Saladic","Salic","Salidic","Sapric","Sodic",
    "Sphagnic","Spodic","Sulfaqueptic","Sulfic","Sulfidic","Sulfuric","Terric","Thaptic",
    "Thapto-Histic","Torrertic","Torrifluventic","Torriorthentic","Torripsammentic","Torroxic","Turbic","Typic",
    "Udandic","Udertic","Udic","Udifluventic","Udollic","Udorthentic","Ultic","Umbric",
    "Ustandic","Ustertic","Ustic","Ustifluventic","Ustivitrandic","Ustollic","Ustoxic","Vermic",
    "Vertic","Vitrandic","Vitritorrandic","Vitrixerandic","Xanthic","Xeralfic","Xereptic","Xerertic",
    "Xeric","Xerofluventic","Xerollic"
];

/****CONSTANTES****/
const opOrden = document.getElementById("opOrden");
const opSuborden = document.getElementById("opSuborden");

/**********************************FUNCIONES*******************/ 
const cambiarOrden = function(){

    let opOrden = document.getElementById("opOrden");
    let index = opOrden.value;
    let hOrden = document.getElementById("hOrden");
    let opSuborden = document.getElementById("opSuborden");
    let hSuborden = document.getElementById("hSuborden");

    switch (index){
        case index: 
        hOrden.innerHTML = ordenes[index];
        opSuborden.innerHTML = subordenDe[index];
        hSuborden.innerHTML = "";
        break;
    }
};

const cambiarSuborden = function(){
    let hSuborden = document.getElementById("hSuborden");
    let opSuborden = document.getElementById("opSuborden").value;

    cambiarGranGrupo();
    document.getElementById("hGranGrupo").innerHTML = "";

    switch (opSuborden){
        case opSuborden:
            hSuborden.innerHTML = subordenes[opSuborden];
            
            break;
        default:
            hSuborden.innerHTML = "";
        break;
    }
};

const cambiarGranGrupo = function (){
    let hGranGrupo = document.getElementById("hGranGrupo");
    let opGranGrupo = document.getElementById("opGranGrupo").value;
    

    switch (opGranGrupo){
        case opGranGrupo:
            hGranGrupo.innerHTML = carGranGrupos[opGranGrupo];
            inputBuscarGranGrupo.value = opGranGrupo;
            
        break;
        default:
            hGranGrupo.innerHTML = "";
        break;
    }
};

const cambiarSubGrupo = function(){
    let opSubGrupo = document.getElementById("opSubGrupo").value;
    switch (opSubGrupo){
        case opSubGrupo:
            inputBuscarSubGrupo.value = opSubGrupo;
        break;
        default:

        break;
    }   
}


/*************PARTE DE BÚSQUEDA DE GRAN GRUPO***********/
// Obtengo los elementos
let opGranGrupo = document.getElementById("opGranGrupo");
var inputBuscarGranGrupo = document.getElementById("inputBuscarGranGrupo");
var list = document.getElementById("listGranGrupo");

//FUNCION QUE BUSCA EN LOS GRANDES GRUPOS
function buscarGranGrupo(){  
    opGranGrupo.innerHTML="";
    // Clear the list
    list.innerHTML = "";

    // Get the input value
    var input = inputBuscarGranGrupo.value.toLowerCase();

    // Loop through the options array
    for (var i = 0; i < granGrupos.length; i++) {
        // Get the current option
        var option = granGrupos[i];

        // Check if the option starts with the input value
        if (option.startsWith(input)) {
            // Create a list item element
            var listItem = document.createElement("li");

            // Set the text content of the list item to the option
            listItem.textContent = option;

            // list.appendChild(listItem);
            let opcion = document.createElement("option");
            opcion.className="bluec";
            opcion.innerHTML=listItem.textContent;
            opGranGrupo.appendChild(opcion);
        }
    }   
}

/****PARTE DE BÚSQUEDA DE LOS SUBGRUPOS */
// Obtengo los elementos
let opSubGrupo = document.getElementById("opSubGrupo");
var inputBuscarSubGrupo = document.getElementById("inputBuscarSubGrupo");
var listSubGrupo = document.getElementById("listSubGrupo");

//FUNCION QUE BUSCA EN LOS GRANDES GRUPOS
function buscarSubGrupo(){  
    opSubGrupo.innerHTML="";
    // Clear the list
    listSubGrupo.innerHTML = "";

    // Get the input value
    var input = capitalizarPrimeraLetra(inputBuscarSubGrupo.value);

    // Loop through the options array
    for (var i = 0; i < subGrupos.length; i++) {
        // Get the current option
        var option = subGrupos[i];

        // Check if the option starts with the input value
        if (option.startsWith(input)) {
            // Create a list item element
            var listItem = document.createElement("li");

            // Set the text content of the list item to the option
            listItem.textContent = option;

            // list.appendChild(listItem);
            let opcion = document.createElement("option");
            opcion.className="bluec";
            opcion.innerHTML=listItem.textContent;
            opSubGrupo.appendChild(opcion);
            
           /*
            let value = "<option>"+option+"</option>";
            opSubGrupo.insertAdjacentElement("beforeend", value);*/
        }
    }   
}

// Esta función recibe un string como parámetro y devuelve el mismo string con la primera letra en mayúscula
function capitalizarPrimeraLetra(str) {
    // Si el string está vacío, se devuelve el mismo string
    if (str.length === 0) {
      return str;
    }
    // Se selecciona el primer carácter del string y se convierte a mayúscula
    let primeraLetra = str[0].toUpperCase();
    // Se obtiene el resto del string sin el primer carácter
    let restoDelString = str.substring(1);
    // Se concatena la primera letra en mayúscula con el resto del string y se devuelve el resultado
    return primeraLetra + restoDelString;
  }
  


function resetOrden(){
    opGranGrupo.innerHTML = "";
    opSubGrupo.innerHTML = "";
    document.getElementById("hSuborden").innerHTML = "";
    document.getElementById("hGranGrupo").innerHTML = "";
    inputBuscarGranGrupo.value = "";
    inputBuscarSubGrupo.value = "";

}


const validarSeleccion = (e) =>{
    switch(e.target.id){
        case "opOrden":           
            resetOrden();
        break;
        case "opSuborden":
            opGranGrupo.innerHTML = "";
            opSubGrupo.innerHTML = "";

        break;
        case "opGranGrupo":
            opSubGrupo.innerHTML = "";
            
        break;
        case "opSubGrupo":

        break;
    }
};

function agregarNombre(){
    //alert(comprobaciones[opSuborden]); 
    /*
    if(comprobaciones[opOrden]==true && comprobaciones[opSuborden]==true &&
        comprobaciones[opGranGrupo]==true && comprobaciones[opSubGrupo]==true){
            let norden = document.getElementById("opOrden").value;
            let nsuborden = document.getElementById("opSuborden").value;
            let ngrangrupo = document.getElementById("opGranGrupo").value;
            let nsubgrupo = document.getElementById("opSubgrupo").value +" ";
            document.getElementById("suelo").innerHTML = nsubgrupo+ngrangrupo+nsuborden+norden;
            alert(nsubgrupo+ngrangrupo+nsuborden+norden);
    }*/
    /*
    alert(opOrden.value!="");
    alert(opSuborden.value!="");
    alert(opGranGrupo.value!="");
    alert(opSubgrupo.value!="");
*/
    //alert("holaaaa");
    //alert(opOrden.value!="" && opSuborden.value!="" && opGranGrupo.value!="" && opSubgrupo.value!="");
    
    let opSubGrupo = document.getElementById("opSubGrupo");
	let opOrden = document.getElementById("opOrden");
	let opSuborden = document.getElementById("opSuborden");
	//let opGranGrupo = document.getElementById("opGranGrupo");
            

    if(opOrden.value!="" && opSuborden.value!="" && opGranGrupo.value!=""){
        let namorden = document.getElementById("opOrden").value;
        let norden = elementoFormativo[namorden]; 
        let nsuborden = document.getElementById("opSuborden").value.toLowerCase();
        let ngrangrupo = document.getElementById("opGranGrupo").value;
        let nsubgrupo = opSubGrupo.value;
        document.getElementById("suelo").innerHTML = " <i>"+nsubgrupo+" "+ngrangrupo+nsuborden+norden+"</i>";
           // alert(nsubgrupo+ngrangrupo+nsuborden+norden);
    }
}


const selects = document.querySelectorAll(".opciones");
selects.forEach((sel) => {
    sel.addEventListener("change", validarSeleccion);
});

/************AGREGAR FUNCIONES A LAS COSAS*************/
opOrden.addEventListener("change", cambiarOrden);


opSuborden.addEventListener("change", cambiarSuborden);


inputBuscarGranGrupo.addEventListener("input", buscarGranGrupo);
opGranGrupo.addEventListener("click", buscarGranGrupo);
opGranGrupo.addEventListener("change", cambiarGranGrupo);

inputBuscarSubGrupo.addEventListener("input", buscarSubGrupo);
opSubGrupo.addEventListener("click", buscarSubGrupo);
opSubGrupo.addEventListener("change", cambiarSubGrupo);
opSubGrupo.addEventListener("change", agregarNombre);

