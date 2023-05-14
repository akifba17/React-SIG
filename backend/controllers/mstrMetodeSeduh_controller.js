import MetodeSeduh from "../models/mstrMetodeSeduh_model.js"

export const getMetodeSeduh = async(req, res) =>{
    try {
        const response = await MetodeSeduh.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetMetodeSeduhAll = async(req, res) =>{
    try {
        const response = await MetodeSeduh.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getMetodeSeduhbyId = async(req, res) =>{
    try {
        const response = await MetodeSeduh.findOne({
            where: {
                id_metodeseduh   : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMetodeSeduh = async(req, res) =>{
    try {
        await MetodeSeduh.create(req.body);
        res.status(201).json({msg:"jenis Produk dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMetodeSeduh = async(req, res) =>{
    try {
        await MetodeSeduh.update(req.body,{
            where:{
                id_metodeseduh   : req.params.id
            }
        });
        res.status(200).json({msg:"jenis Produk dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMetodeSeduh = async(req, res) =>{
    try {
        await MetodeSeduh.destroy({
            where:{
                id_metodeseduh   : req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}