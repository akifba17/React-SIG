import JenisUsaha from "../models/mstrJenisUsaha_model.js";

export const getJenisUsaha = async(req, res) =>{
    try {
        const response = await JenisUsaha.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetJenisUsahaAll = async(req, res) =>{
    try {
        const response = await JenisUsaha.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getJenisUsahabyId = async(req, res) =>{
    try {
        const response = await JenisUsaha.findOne({
            where: {
                id_jenisusaha : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createJenisUsaha = async(req, res) =>{
    try {
        await JenisUsaha.create(req.body);
        res.status(201).json({msg:"jenis Produk dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateJenisUsaha = async(req, res) =>{
    try {
        await JenisUsaha.update(req.body,{
            where:{
                id_jenisusaha : req.params.id
            }
        });
        res.status(200).json({msg:"jenis Produk dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteJenisUsaha = async(req, res) =>{
    try {
        await JenisUsaha.destroy({
            where:{
                id_jenisusaha : req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}