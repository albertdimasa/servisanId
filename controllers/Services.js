import Services from "../models/ServiceModel.js";

export const getAllServices = async (req, res) => {
  try {
    const services = await Services.findAll();
    res.json(services);
  } catch (error) {
    console.log(error);
  }
};

export const addService = async (req, res) => {
  try {
    await Services.create(req.body);
    res.json({ message: "Servis Berhasil Ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};
