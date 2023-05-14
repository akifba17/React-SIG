import express, { Router } from "express";
import { DEVgetJenisProdukAll, createJenisProduk, deleteJenisProduk, getJenisProduk, getJenisProdukbyId, updateJenisProduk } from "../controllers/mstrJenisProduk_cotroller.js";

const routerJenisProduk = express.Router();

routerJenisProduk.get('/JenisProduk', getJenisProduk);
routerJenisProduk.get('/DEVJenisProduk', DEVgetJenisProdukAll);
routerJenisProduk.get('/JenisProduk/:id', getJenisProdukbyId);
routerJenisProduk.post('/JenisProduk', createJenisProduk);
routerJenisProduk.patch('/JenisProduk/:id', updateJenisProduk);
routerJenisProduk.delete('/JenisProduk/:id', deleteJenisProduk);


export default routerJenisProduk;