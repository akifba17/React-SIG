import express, { Router } from "express";
import { DEVgetUserAll, createUser, deleteUser, getUser, getUserbyId, updateUser } from "../controllers/mstrUser_controller.js";

const routerUser = express.Router();

routerUser.get('/User', getUser);
routerUser.get('/DEVUser', DEVgetUserAll);
routerUser.get('/User/:id', getUserbyId);
routerUser.post('/User', createUser);
routerUser.patch('/User/:id', updateUser);
routerUser.delete('/User/:id', deleteUser);


export default routerUser;