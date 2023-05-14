import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const JenisKopi = db.define('master_metoderoasting',{
    id_metoderoasting :{ 
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    nama_metoderoasting: DataTypes.STRING,
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    freezeTableName:true, 
    timestamps:false
    
    }
);

export default JenisKopi;

(async()=>{
    await db.sync();
})();

