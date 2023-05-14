import express from "express";
import cors from "cors";
import routerJenisKopi from "./routes/mstrJenisKopi_route.js";
import routerJenisProduk from "./routes/mstrJenisProduk_route.js";
import routerJenisUsaha from "./routes/mstrJenisUsaha_route.js";
import routerKelurahan from "./routes/mstrKelurahan_route.js";
import routerMetodePengolahanPP from "./routes/mstrMetodePengolahanPP_route.js";
import routerMetodeRoasting from "./routes/mstrMetodeRoasting_route.js";
import routerMetodeSeduh from "./routes/mstrMetodeSeduh_route.js";
import routerUser from "./routes/mstrUser_route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerJenisKopi);
app.use(routerJenisProduk);
app.use(routerJenisUsaha);
app.use(routerKelurahan);
app.use(routerMetodePengolahanPP);
app.use(routerMetodeRoasting);
app.use(routerMetodeSeduh);
app.use(routerUser);


app.listen(3500, ()=> console.log('dah bisa servernya boy...'));

