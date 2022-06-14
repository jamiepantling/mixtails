const express = require("express");
const router = express.Router();
const mixtapesCtrl = require("../../controllers/api/mixtapes");

// router.post("/", mixtapesCtrl.update);
router.get("/", mixtapesCtrl.index);
router.delete('/', mixtapesCtrl.deleteMixtape)
router.get("/:id", mixtapesCtrl.show);
router.post("/update/:id", mixtapesCtrl.addMood);
router.post("/", mixtapesCtrl.create);

module.exports = router;
