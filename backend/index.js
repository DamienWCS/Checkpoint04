const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mysql = require("mysql2");
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

// Connectez-vous à la base de données MySQL en utilisant les variables d'environnement
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Vérifier la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
    return;
  }
  console.log("Connecté à la base de données MySQL");
});

// Utilisez Axios pour effectuer des requêtes HTTP vers votre backend
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Remplacez par l'URL de votre backend
});

// Exemple d'utilisation d'Axios pour effectuer une requête POST vers votre backend
app.post("/api/reservations", async (req, res) => {
  try {
    const response = await axiosInstance.post("/api/reservations", req.body);
    res.status(201).json(response.data);
  } catch (error) {
    console.error("Erreur lors de la création de la réservation :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de la réservation." });
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
