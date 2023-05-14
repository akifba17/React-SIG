import JenisKopi from "../models/mstrJenisKopi_model.js";

export const getJenisKopi = async(req, res) =>{
    try {
        const response = await JenisKopi.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetJenisKopiAll = async(req, res) =>{
    try {
        const response = await JenisKopi.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getJenisKopibyId = async(req, res) =>{
    try {
        const response = await JenisKopi.findOne({
            where: {
                id_jeniskopi: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createJenisKopi = async(req, res) =>{
    try {
        await JenisKopi.create(req.body);
        res.status(201).json({msg:"jenis kopi dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateJenisKopi = async(req, res) =>{
    try {
        await JenisKopi.update(req.body,{
            where:{
                id_jeniskopi: req.params.id
            }
        });
        res.status(200).json({msg:"jenis kopi dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteJenisKopi = async(req, res) =>{
    try {
        await JenisKopi.destroy({
            where:{
                id_jeniskopi: req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}