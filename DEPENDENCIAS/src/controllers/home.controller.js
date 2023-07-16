import app from '../app.js';
import {pool} from '../db.js';
//import {app} from "../app.js";

export const rutaPricipal = async(req,res) => {
    const resultadopeticion = await pool.query("SELECT * FROM clientes");
        res.json(resultadopeticion)
};


//#region FUNCTIONS
export const PostRegistro_Suelos = async(req, res) => {

};


// Manejo de la solicitud POST para obtener los datos del formulario
export const postFisicas = async (req, res) =>
{
    /*
    const {
        apparent_density,
        real_density,
        relative_density,
        maximum_dry_density,
        compressive_strength,
        thermal_conductivity,
        liquid,
        plastic,
        silt,
        clay,
        gravel,
        sand,
        optimum_moisture_content,
        plasticity_index,
        gran_size,
        water_content,
        color,
        tensile_strength,
        porosity,
        initial_moisture,
        earring,
        ground_altitude,
        average_temperature,
        rainfall_regime
    } = req.body;
    */

    var apparent_density = parseFloat(req.body.apparent_density)
    var real_density = parseFloat(req.body.real_density)
    var relative_density = parseFloat(req.body.relative_density)
    var maximum_dry_density = parseFloat(req.body.maximum_dry_density)
    var compressive_strength = parseFloat(req.body.compressive_strength)

/*
    thermal_conductivity,
    liquid,
    plastic,
    silt,
    clay,
    gravel,
    sand,
    optimum_moisture_content,
    plasticity_index,
    gran_size,
    water_content,
    color,
    tensile_strength,
    porosity,
    initial_moisture,
    earring,
    ground_altitude,
    average_temperature,
    rainfall_regime*/

    console.log("tipo de datooooo",req.body.apparent_density)

    
    var query = `INSERT INTO PHYSICAL_PROPERTIES(apparent_density, real_density, relative_density, maximum_dry_density, compressive_strength) 
                    VALUES('${apparent_density}', '${real_density}', '${relative_density}', '${maximum_dry_density}', '${compressive_strength}'

                    )   
                    ` 
                    //console.log('Query maked')
    try {
        const result = await pool.query(query)
        //console.log('Query Done')
        //return 'Query done'
        res.status(200).json(result)

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}

//#endregion