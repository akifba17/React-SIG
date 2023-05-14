import Kelurahan from "../models/mstrKelurahan_model.js";

export const getKelurahan = async(req, res) =>{
    try {
        const response = await Kelurahan.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetKelurahanAll = async(req, res) =>{
    try {
        const response = await Kelurahan.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getKelurahanbyId = async(req, res) =>{
    try {
        const response = await Kelurahan.findOne({
            where: {
                id_kelurahan : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKelurahan = async(req, res) =>{
    try {
        await Kelurahan.create(req.body);
        res.status(201).json({msg:"jenis Produk dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKelurahan = async(req, res) =>{
    try {
        await Kelurahan.update(req.body,{
            where:{
                id_kelurahan : req.params.id
            }
        });
        res.status(200).json({msg:"jenis Produk dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKelurahan = async(req, res) =>{
    try {
        await Kelurahan.destroy({
            where:{
                id_kelurahan : req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}