import express, { Router } from "express";
import { DEVgetMetodePengolahanPPAll, createMetodePengolahanPP, deleteMetodePengolahanPP, getMetodePengolahanPP, getMetodePengolahanPPbyId, updateMetodePengolahanPP } from "../controllers/mstrMetodePengolahanPP_controller.js";

const routerMetodePengolahanPP = express.Router();

routerMetodePengolahanPP.get('/MetodePengolahanPP', getMetodePengolahanPP);
routerMetodePengolahanPP.get('/DEVMetodePengolahanPP', DEVgetMetodePengolahanPPAll);
routerMetodePengolahanPP.get('/MetodePengolahanPP/:id', getMetodePengolahanPPbyId);
routerMetodePengolahanPP.post('/MetodePengolahanPP', createMetodePengolahanPP);
routerMetodePengolahanPP.patch('/MetodePengolahanPP/:id', updateMetodePengolahanPP);
routerMetodePengolahanPP.delete('/MetodePengolahanPP/:id', deleteMetodePengolahanPP);


export default routerMetodePengolahanPP;