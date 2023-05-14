import JenisProduk from "../models/mstrJenisProduk_model.js";

export const getJenisProduk = async(req, res) =>{
    try {
        const response = await JenisProduk.findAll({
            where:{
                status: true}
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const DEVgetJenisProdukAll = async(req, res) =>{
    try {
        const response = await JenisProduk.findAll({
            
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getJenisProdukbyId = async(req, res) =>{
    try {
        const response = await JenisProduk.findOne({
            where: {
                id_jenisproduk : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createJenisProduk = async(req, res) =>{
    try {
        await JenisProduk.create(req.body);
        res.status(201).json({msg:"jenis Produk dah ke insert gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateJenisProduk = async(req, res) =>{
    try {
        await JenisProduk.update(req.body,{
            where:{
                id_jenisproduk : req.params.id
            }
        });
        res.status(200).json({msg:"jenis Produk dah ke update gan"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteJenisProduk = async(req, res) =>{
    try {
        await JenisProduk.destroy({
            where:{
                id_jenisproduk : req.params.id
            }
        });
        res.status(200).json({msg:"jangkrik boss.."});
    } catch (error) {
        console.log(error.message);
    }
}