import express from "express";
const router = express.Router()

import userControllers from "../controllers/userControllers.js";
import authControllers from "../controllers/authControllers.js";
import auth from "../auth/validateToken.js";

router.post("/create", userControllers.createUser)
router.post("/login", authControllers.login)

router.get("/getAll", auth.validateToken, userControllers.getAll)
router.get("/getById/:id", auth.validateToken, userControllers.getById)
router.put("/updateById/:id", auth.validateToken, userControllers.updateById)
router.delete("/removeById/:id", auth.validateToken, userControllers.removeById)

export default router