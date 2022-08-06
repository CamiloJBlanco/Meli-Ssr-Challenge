"use strict";
import express from "express";
import products from "./productsRoutes.js";
const app = express();
const client = "http://localhost:3000";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${client}`);
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Allow", "GET, POST");
  next();
});

app.use("/", products);

export default app;