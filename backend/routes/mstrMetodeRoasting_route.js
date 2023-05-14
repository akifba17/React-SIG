import express, { Router } from "express";
import { DEVgetMetodeRoastingAll, createMetodeRoasting, deleteMetodeRoasting, getMetodeRoasting, getMetodeRoastingbyId, updateMetodeRoasting } from "../controllers/mstrMetodeRoasting_controller.js";

const routerMetodeRoasting = express.Router();

routerMetodeRoasting.get('/MetodeRoasting', getMetodeRoasting);
routerMetodeRoasting.get('/DEVMetodeRoasting', DEVgetMetodeRoastingAll);
routerMetodeRoasting.get('/MetodeRoasting/:id', getMetodeRoastingbyId);
routerMetodeRoasting.post('/MetodeRoasting', createMetodeRoasting);
routerMetodeRoasting.patch('/MetodeRoasting/:id', updateMetodeRoasting);
routerMetodeRoasting.delete('/MetodeRoasting/:id', deleteMetodeRoasting);


export default routerMetodeRoasting;