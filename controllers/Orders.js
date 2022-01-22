import Stores from "../models/OrderModel.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Stores.findAll();
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
};

export const submitOrder = async (req, res) => {
  try {
    await Stores.create(req.body);
    res.json({ message: "Pesanan Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};
