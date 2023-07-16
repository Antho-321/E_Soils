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
    const {
        apparent_density,
        real_density,
        relative_density,
        maximum_dry_density,
        compressive_strength 
    } = req.body;

    /*-
    let pparent_density = apparent_density
    let eal_density = real_density
    let elative_density = relative_density
    let aximum_dry_density = maximum_dry_density
    let ompressive_strength = compressive_strength
    */

    var query = `INSERT INTO PHYSICAL_PROPERTIES(apparent_density, real_density, relative_density, maximum_dry_density, compressive_strength) 
                    VALUES('${apparent_density}', '${real_density}', '${relative_density}', '${maximum_dry_density}', '${compressive_strength}')
                    
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