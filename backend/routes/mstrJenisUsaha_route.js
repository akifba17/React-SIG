import express, { Router } from "express";
import { DEVgetJenisUsahaAll, createJenisUsaha, deleteJenisUsaha, getJenisUsaha, getJenisUsahabyId, updateJenisUsaha } from "../controllers/mstrJenisUsaha_controller.js";


const routerJenisUsaha = express.Router();

routerJenisUsaha.get('/JenisUsaha', getJenisUsaha);
routerJenisUsaha.get('/DEVJenisUsaha', DEVgetJenisUsahaAll);
routerJenisUsaha.get('/JenisUsaha/:id', getJenisUsahabyId);
routerJenisUsaha.post('/JenisUsaha', createJenisUsaha);
routerJenisUsaha.patch('/JenisUsaha/:id', updateJenisUsaha);
routerJenisUsaha.delete('/JenisUsaha/:id', deleteJenisUsaha);


export default routerJenisUsaha;