import express from "express";
import productsQueries from "./products.js";
const router = express.Router();

router.get("/api/items", productsQueries.getProducts);
router.get("/api/items/:id", productsQueries.getProductDetail);

export default router;