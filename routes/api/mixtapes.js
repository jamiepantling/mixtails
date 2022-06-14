const express = require("express");
const router = express.Router();
const mixtapesCtrl = require("../../controllers/api/mixtapes");

// router.post("/", mixtapesCtrl.update);
router.get("/", mixtapesCtrl.index);
router.delete('/', mixtapesCtrl.deleteMixtape)
router.get("/:id", mixtapesCtrl.show);
router.put("/update/:id", mixtapesCtrl.addRemoveMood);
router.post("/", mixtapesCtrl.create);
router.put("/:id", mixtapesCtrl.update)

module.exports = router;
