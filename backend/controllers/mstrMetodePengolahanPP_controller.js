import MetodePengolahanPP from "../models/mstrMetodePengolahanPP_model.js"

export const getMetodePengolahanPP = async(req, res) =>{
    try {
        const response = await MetodePengolahanPP.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetMetodePengolahanPPAll = async(req, res) =>{
    try {
        const response = await MetodePengolahanPP.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getMetodePengolahanPPbyId = async(req, res) =>{
    try {
        const response = await MetodePengolahanPP.findOne({
            where: {
                id_metodepengolahanpp : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMetodePengolahanPP = async(req, res) =>{
    try {
        await MetodePengolahanPP.create(req.body);
        res.status(201).json({msg:"jenis Produk dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMetodePengolahanPP = async(req, res) =>{
    try {
        await MetodePengolahanPP.update(req.body,{
            where:{
                id_metodepengolahanpp : req.params.id
            }
        });
        res.status(200).json({msg:"jenis Produk dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMetodePengolahanPP = async(req, res) =>{
    try {
        await MetodePengolahanPP.destroy({
            where:{
                id_metodepengolahanpp : req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}