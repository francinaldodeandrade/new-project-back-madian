import express from "express";
const router = express.Router()

import productControllers from "../controllers/productControllers.js";


router.get("/getAll", productControllers.getAll)
router.get("/getById/:id", productControllers.getById)

router.post("/create", productControllers.createProduct)
router.put("/updateById/:id", productControllers.updateById)
router.delete("/removeById/:id", productControllers.removeById)

export default router