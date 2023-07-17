import {pool} from '../db.js';
import pkg from 'body-parser';
import express from 'express';
var usuario;
const { json, urlencoded } = pkg;
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

export const rutaPricipal = async(req,res) => {
    const resultadopeticion = await pool.query("SELECT * FROM clientes");
        res.json(resultadopeticion)
};


//#region FUNCTIONS
export const PostRegistro_Suelos = async(req, res) => {

};

export const postRegistro_Usuario1 = async(req, res) => {
    try {
        usuario=[req.body.id_number,req.body.name, req.body.surname, req.body.email, req.body.password];
res.redirect('http://127.0.0.1:5500/PAGINAS/Sign-up-2.html');
    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
};

export const postRegistro_Usuario2 = async(req, res) => {
const resultado = await pool.query(`
    INSERT INTO clientes (
        idcli, names_, surnamecli, emailcli, passwordcli)        
    VALUES ('${usuario[0]}', '${usuario[1]}', '${usuario[2]}', '${usuario[3]}', '${usuario[4]}')`
    );

    if (resultado) return res.status(200).json(resultado.rows[0])
}


// Manejo de la solicitud POST para obtener los datos del formulario Propiedades Físicas
export const postFisicas = async (req, res) =>
{
    try {
        const {
        apparent_density, real_density, relative_density, maximum_dry_density,compressive_strength,
        thermal_conductivity, liquid, plastic, silt, clay,
        gravel, sand, optimum_moisture_content, plasticity_index, grain_size,
        water_content, color, tensile_strength, porosity, initial_moisture,
        earring, ground_altitude, average_temperature, rainfall_regime
        } = req.body;

        // Parsear los valores a float
        const apparentDensity1 = parseFloat(apparent_density);
        const realDensity1 = parseFloat(real_density);
        const relativeDensity1 = parseFloat(relative_density);
        const maximumDryDensity1 = parseFloat(maximum_dry_density);
        const compressiveStrength1 = parseFloat(compressive_strength);
        const thermal_conductivity1 = parseFloat(thermal_conductivity);
        const liquid1 = parseFloat(liquid);
        const plastic1 = parseFloat(plastic);
        const silt1 = parseFloat(silt);
        const clay1 = parseFloat(clay);
        const gravel1 = parseFloat(gravel);
        const sand1 = parseFloat(sand);
        const optimum_moisture_content1 = parseFloat(optimum_moisture_content);
        const plasticity_index1 = parseFloat(plasticity_index);
        const grain_size1 = parseFloat(grain_size);
        const water_content1 = parseFloat(water_content);
        //const color1 = parseFloat(color);
        const tensile_strength1 = parseFloat(tensile_strength);
        const porosity1 = parseFloat(porosity);
        const initial_moisture1 = parseFloat(initial_moisture);
        const earring1 = parseFloat(earring);
        const ground_altitude1 = parseFloat(ground_altitude);
        const average_temperature1 = parseFloat(average_temperature);
        const rainfall_regime1 = parseFloat(rainfall_regime);

        const resultado = await pool.query(`
        INSERT INTO physical_properties (
            apparent_density, real_density, relative_density, maximum_dry_density,compressive_strength,
            thermal_conductivity, liquid, plastic, silt, clay,
            gravel, sand, optimum_moisture_content, plasticity_index, grain_size,
            water_content, color, tensile_strength, porosity, initial_moisture,
            earring, ground_altitude, average_temperature, rainfall_regime) 
            
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24) 
        RETURNING *`,

            [
                apparentDensity1, realDensity1, relativeDensity1, maximumDryDensity1, compressiveStrength1,
                thermal_conductivity1, liquid1, plastic1, silt1, clay1,
                gravel1, sand1, optimum_moisture_content1, plasticity_index1, grain_size1,
                water_content1, color, tensile_strength1, porosity1, initial_moisture1,
                earring1, ground_altitude1, average_temperature1, rainfall_regime1
            ]
        );

        if (resultado) return res.status(200).json(resultado.rows[0])

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}

// Manejo de la solicitud POST para obtener los datos del formulario Propiedades Quimicas
export const postQuimicas = async (req, res) =>
{
    try {
        const {
        alkalinity_or_acidity, organic_material, total_phosphorus,
        extractable_sulfur, interchangeable_aluminum, electric_conductivity, exchangeable_calcium,
        exchangeable_magnesium,exchangeable_potassium,exchangeable_sodium,extractable_copper,
        removable_iron,extractable_manganese,extractable_zinc, boron
        } = req.body;

        // Parsear los valores a float
        const alkalinity_or_acidity1 = parseFloat(alkalinity_or_acidity);
        const organic_material1 = parseFloat(organic_material);
        const total_phosphorus1 = parseFloat(total_phosphorus);
        const extractable_sulfur1 = parseFloat(extractable_sulfur);
        const interchangeable_aluminum1 = parseFloat(interchangeable_aluminum);
        const electric_conductivity1 = parseFloat(electric_conductivity);
        const exchangeable_calcium1 = parseFloat(exchangeable_calcium);
        const exchangeable_magnesium1 = parseFloat(exchangeable_magnesium);
        const exchangeable_potassium1 = parseFloat(exchangeable_potassium);
        const exchangeable_sodium1 = parseFloat(exchangeable_sodium);
        const extractable_copper1 = parseFloat(extractable_copper);
        const removable_iron1 = parseFloat(removable_iron);
        const extractable_manganese1 = parseFloat(extractable_manganese);
        const extractable_zinc1 = parseFloat(extractable_zinc);
        const boron1 = parseFloat(boron);

        console.log("El tipo es   ",boron1);

        const resultado = await pool.query(`
        INSERT INTO chemical_properties (
            alkalinity_or_acidity, organic_material, total_phosphorus,
            extractable_sulfur, interchangeable_aluminum, electric_conductivity, exchangeable_calcium,
            exchangeable_magnesium, exchangeable_potassium, exchangeable_sodium, extractable_copper,
            removable_iron, extractable_manganese, extractable_zinc, boron) 
            
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) 
        RETURNING *`,

            [
                alkalinity_or_acidity1, organic_material1, total_phosphorus1,
                extractable_sulfur1, interchangeable_aluminum1, electric_conductivity1, exchangeable_calcium1,
                exchangeable_magnesium1,exchangeable_potassium1,exchangeable_sodium1,extractable_copper1,
                removable_iron1,extractable_manganese1,extractable_zinc1, boron1
            ]
        );

        if (resultado) return res.status(200).json(resultado.rows[0])

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}


// Manejo de la solicitud POST para obtener los datos del formulario Propiedades Biologicas
export const postBiologicas = async (req, res) =>
{
    try {
        const {
            
        ide_suelo,
        organisms_description,
        microbial_activity,
        microbial_intensity,
        microbial_description,
        biomass_method,
        biomass_results,
        biomass_description,
        macroinvertebrates_description,
        average_depth,
        measurement_method,
        additional_remarks,

        organism,
        number_organism,

        macroinvertebrates,
        number_macroinvertebrates
        } = req.body;

        // Parsear los valores a float
        const average_depth1 = parseFloat(average_depth);
        const number_organism1 = parseFloat(number_organism);
        const number_macroinvertebrates1 = parseFloat(number_macroinvertebrates);

        //console.log("El tipo es   ",boron1);

        const resultado = await pool.query(`
        SELECT COUNT(ide_biological) + 1 as total_registros from biological_properties;
        INSERT INTO biological_properties (
            
            ) 
            
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) 
        RETURNING *`,

            [
                alkalinity_or_acidity1, organic_material1, total_phosphorus1,
                extractable_sulfur1, interchangeable_aluminum1, electric_conductivity1, exchangeable_calcium1,
                exchangeable_magnesium1,exchangeable_potassium1,exchangeable_sodium1,extractable_copper1,
                removable_iron1,extractable_manganese1,extractable_zinc1, boron1
            ]
        );

        if (resultado) return res.status(200).json(resultado.rows[0])

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}



// Manejo de la solicitud POST para obtener los datos del formulario Propiedades Quimicas
export const postClasification = async (req, res) =>
{
    try {
        const {
            orden, suborden, ggroup, sgroup
        } = req.body;

        console.log("El tipo es   ",orden);

        const resultado = await pool.query(`
        INSERT INTO clasification (
            orden, suborden, ggroup, sgroup) 
            
        VALUES ($1, $2, $3, $4) 
        RETURNING *`,
            [
                orden, suborden, ggroup, sgroup
            ]
        );

    if (resultado) return res.status(200).json(resultado.rows[0])

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}






// Manejo de la solicitud POST para obtener los datos del formulario Propiedades Quimicas
export const postEditProfile = async (req, res) =>
{
    try {
        const {idcli, 
            picture, names_, surname, emailcli, passwordcli
        } = req.body;

        console.log("El tipo es   ",picture);

        const resultado = await pool.query(`
        UPDATE INTO clientes (
            picture, names_, surname, passwordcli) 
            
        VALUES ($1, $2, $3, $4) 
        WHERE ($5 = $6)
        RETURNING *`,
            [
                picture, names_, surname, passwordcli,
                idcli, clientes.idcli
            ]
        );

    if (resultado) return res.status(200).json(resultado.rows[0])

    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    }
}
//#endregion
////////////////////////////////////////////////
//Intento para hacer el login
