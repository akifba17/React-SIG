import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const JenisUsaha = db.define('master_jenisusaha',{
    id_jenisusaha  :{ 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    nama_jenisusaha: DataTypes.STRING,
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    freezeTableName:true, 
    timestamps:false
    
    }
);

export default JenisUsaha;

(async()=>{
    await db.sync();
})();

