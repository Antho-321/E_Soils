import express from 'express';
import {pool} from '../db.js';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

export const rutaPricipal = async(req,res) => {
    const resultadopeticion = await pool.query("SELECT * FROM clientes");
        res.json(resultadopeticion)
};

export const PostRegistro_Suelos = async(req, res) => {

};

export const postFisicas = async (req, res) =>
{
    let apparent_density=req.body.apparent_density;
    console.log(apparent_density);
 }