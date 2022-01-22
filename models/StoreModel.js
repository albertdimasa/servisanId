import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Stores = db.define(
  "stores",
  {
    nama: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    jam_buka: {
      type: DataTypes.STRING,
    },
    jam_tutup: {
      type: DataTypes.STRING,
    },
    kategori_layanan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => {
  await db.sync();
})();

export default Stores;
