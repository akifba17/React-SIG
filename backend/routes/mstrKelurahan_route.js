import express, { Router } from "express";
import { DEVgetKelurahanAll, createKelurahan, deleteKelurahan, getKelurahan, getKelurahanbyId, updateKelurahan } from "../controllers/mstrKelurahan_controller.js";


const routerKelurahan = express.Router();

routerKelurahan.get('/Kelurahan', getKelurahan);
routerKelurahan.get('/DEVKelurahan', DEVgetKelurahanAll);
routerKelurahan.get('/Kelurahan/:id', getKelurahanbyId);
routerKelurahan.post('/Kelurahan', createKelurahan);
routerKelurahan.patch('/Kelurahan/:id', updateKelurahan);
routerKelurahan.delete('/Kelurahan/:id', deleteKelurahan);


export default routerKelurahan;