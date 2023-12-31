const express = require("express");
const router = express.Router();

// Middleware pour la validation des données
//const validateReservationData = require("../middlewares/validateReservationData");

const reservations = [];

// Route pour créer une réservation
router.post("/reservations", (req, res) => {
  const { name, phone, date, numberOfPeople } = req.body;

  if (!name || !phone || !date || !numberOfPeople) {
    return res
      .status(400)
      .json({ message: "Tous les champs sont obligatoires." });
  }

  const reservation = {
    id: reservations.length + 1,
    name,
    phone,
    date,
    numberOfPeople,
  };

  reservations.push(reservation);

  return res
    .status(201)
    .json({ message: "Réservation créée avec succès.", reservation });
});

router.get("/reservations", (req, res) => {
  return res.status(200).json({ reservations });
});

router.get("/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const reservation = reservations.find((r) => r.id === id);

  if (!reservation) {
    return res.status(404).json({ message: "Réservation non trouvée." });
  }

  return res.status(200).json({ reservation });
});

router.put("/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const reservationIndex = reservations.findIndex((r) => r.id === id);

  if (reservationIndex === -1) {
    return res.status(404).json({ message: "Réservation non trouvée." });
  }

  const updatedReservation = {
    id,
    ...req.body,
  };

  reservations[reservationIndex] = updatedReservation;

  return res.status(200).json({
    message: "Réservation mise à jour avec succès.",
    reservation: updatedReservation,
  });
});

router.delete("/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const reservationIndex = reservations.findIndex((r) => r.id === id);

  if (reservationIndex === -1) {
    return res.status(404).json({ message: "Réservation non trouvée." });
  }

  reservations.splice(reservationIndex, 1);

  return res
    .status(200)
    .json({ message: "Réservation supprimée avec succès." });
});

module.exports = router;
