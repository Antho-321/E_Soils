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
    let apparent_density = parseFloat(req.body.apparent_density)
    let real_density = parseFloat(req.body.real_density)
    let relative_density = parseFloat(req.body.relative_density)
    let maximum_dry_density = parseFloat(req.body.maximum_dry_density)
    let compressive_strength = parseFloat(req.body.compressive_strength)
*/
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
    try {
        const {
        apparent_density, real_density, relative_density, maximum_dry_density,compressive_strength,
        thermal_conductivity, liquid, plastic, silt, clay,
        gravel, sand, optimum_moisture_content, plasticity_index, gran_size,
        water_content, color, tensile_strength, porosity, initial_moisture,
        earring, ground_altitude, average_temperature, rainfall_regime
        } = req.body;

        // Parsear los valores a float
        const parsedApparentDensity = parseFloat(apparent_density);
        const parsedRealDensity = parseFloat(real_density);
        const parsedRelativeDensity = parseFloat(relative_density);
        const parsedMaximumDryDensity = parseFloat(maximum_dry_density);
        const parsedCompressiveStrength = parseFloat(compressive_strength);


        const resultado = await pool.query("INSERT INTO physical_properties (apparent_density, real_density, relative_density, maximum_dry_density, compressive_strength) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [parsedApparentDensity, parsedRealDensity, parsedRelativeDensity, parsedMaximumDryDensity, parsedCompressiveStrength]
        );

        if (resultado) return res.status(200).json(resultado.rows[0])

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}

//#endregion