import express, { Router } from "express";
import { DEVgetMetodeSeduhAll, createMetodeSeduh, deleteMetodeSeduh, getMetodeSeduh, getMetodeSeduhbyId, updateMetodeSeduh } from "../controllers/mstrMetodeSeduh_controller.js";

const routerMetodeSeduh = express.Router();

routerMetodeSeduh.get('/MetodeSeduh', getMetodeSeduh);
routerMetodeSeduh.get('/DEVMetodeSeduh', DEVgetMetodeSeduhAll);
routerMetodeSeduh.get('/MetodeSeduh/:id', getMetodeSeduhbyId);
routerMetodeSeduh.post('/MetodeSeduh', createMetodeSeduh);
routerMetodeSeduh.patch('/MetodeSeduh/:id', updateMetodeSeduh);
routerMetodeSeduh.delete('/MetodeSeduh/:id', deleteMetodeSeduh);


export default routerMetodeSeduh;