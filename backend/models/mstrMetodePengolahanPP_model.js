import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const MetodePengolahanPP = db.define('master_metodepengolahanpp',{
    id_metodepengolahanpp:{ 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    nama_metodepengolahanpp: DataTypes.STRING,
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    freezeTableName:true, 
    timestamps:false
    
    }
);

export default MetodePengolahanPP;

(async()=>{
    await db.sync();
})();

