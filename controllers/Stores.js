import db from "../config/Database.js";
import Stores from "../models/StoreModel.js";

export const getAllStores = async (req, res) => {
  try {
    const stores = await Stores.findAll();
    res.json(stores);
  } catch (error) {
    console.log(error);
  }
};

export const addStore = async (req, res) => {
  try {
    await Stores.create(req.body);
    res.json({ message: "Toko Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};

export const getStoresById = async (req, res) => {
  try {
    const stores = await Stores.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(stores[0]);
  } catch (error) {
    console.log(error);
  }
};
