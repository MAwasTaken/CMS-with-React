const express = require("express");

const controller = require("../../controllers/v1/contact");

const router = express.Router();

router.route("/").get(controller.getAll).post(controller.create);

module.exports = router;
