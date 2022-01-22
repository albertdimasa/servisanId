import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Orders = db.define(
  "orders",
  {
    status: {
      type: DataTypes.ENUM("terima", "servis", "selesai"),
      defaultValue: "terima",
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

export default Orders;
