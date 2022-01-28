import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import {
  addStore,
  getAllStores,
  getStoresById,
} from "../controllers/Stores.js";
import { getAllOrders, submitOrder } from "../controllers/Orders.js";
import {
  addService,
  getAllServices,
  getServicesById,
} from "../controllers/Services.js";

const router = express.Router();

//Auth
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

//Stores
router.get("/stores", getAllStores);
router.get("/stores/:id", getStoresById);
router.post("/stores", addStore);

//Orders
router.get("/orders", getAllOrders);
router.post("/orders", submitOrder);

//Services
router.get("/services", getAllServices);
router.get("/services/:id", getServicesById);
router.post("/services", addService);

export default router;
