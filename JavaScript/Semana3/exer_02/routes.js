const express = require("express");
const router = express.Router();

//Rota get
router.get("/", (req, res) => {
    res.send("Rota GET funcionando!")
});

//Rota post
router.post("/", (req, res) => {
    res.send("Rota POST funcionando!")
});

router.put("/", (req, res) => {
    res.send("Rota PUT funcionando!")
});

//Rota delete
router.delete("/", (req, res) => {
    res.send("Rota DELETE funcionado!");
});

module.exports = router;