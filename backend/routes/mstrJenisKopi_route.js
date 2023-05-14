import express, { Router } from "express";
import { DEVgetJenisKopiAll, createJenisKopi, deleteJenisKopi, getJenisKopi,getJenisKopibyId, updateJenisKopi } from "../controllers/mstrJenisKopi_controller.js";

const routerJenisKopi = express.Router();

routerJenisKopi.get('/JenisKopi', getJenisKopi);
routerJenisKopi.get('/DEVJenisKopi', DEVgetJenisKopiAll);
routerJenisKopi.get('/JenisKopi/:id', getJenisKopibyId);
routerJenisKopi.post('/JenisKopi', createJenisKopi);
routerJenisKopi.patch('/JenisKopi/:id', updateJenisKopi);
routerJenisKopi.delete('/JenisKopi/:id', deleteJenisKopi);


export default routerJenisKopi;