import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const JenisProduk = db.define('master_jenisproduk',{
    id_jenisproduk :{ 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    nama_jenisproduk: DataTypes.STRING,
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    freezeTableName:true, 
    timestamps:false
    
    }
);

export default JenisProduk;

(async()=>{
    await db.sync();
})();

