// LOADING IN THE EXPRESS MODULE
import express from "express";

// IMPORTING ROUTE HANDLER FUNCTIONS
import { getPosts } from "../controllers/posts.js"


// CREATING THE EXPRESS ROUTER
const router = express.Router();

router.get("/", getPosts);

export default router;






