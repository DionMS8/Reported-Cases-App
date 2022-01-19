// LOADING IN THE EXPRESS MODULE
import express from "express";

// CREATING THE EXPRESS ROUTER
const router = express.Router();

router.get("/", (req, res) => {
    res.send("POSTS!!!");
});

export default router;



