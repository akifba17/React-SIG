import MetodeRoasting from "../models/mstrMetodeRoasting_model.js"

export const getMetodeRoasting = async(req, res) =>{
    try {
        const response = await MetodeRoasting.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetMetodeRoastingAll = async(req, res) =>{
    try {
        const response = await MetodeRoasting.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getMetodeRoastingbyId = async(req, res) =>{
    try {
        const response = await MetodeRoasting.findOne({
            where: {
                id_metoderoasting  : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMetodeRoasting = async(req, res) =>{
    try {
        await MetodeRoasting.create(req.body);
        res.status(201).json({msg:"jenis Produk dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMetodeRoasting = async(req, res) =>{
    try {
        await MetodeRoasting.update(req.body,{
            where:{
                id_metoderoasting  : req.params.id
            }
        });
        res.status(200).json({msg:"jenis Produk dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMetodeRoasting = async(req, res) =>{
    try {
        await MetodeRoasting.destroy({
            where:{
                id_metoderoasting  : req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}