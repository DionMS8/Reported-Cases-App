// LOADING IN THE EXPRESS MODULE
import express from "express";

// IMPORTING ROUTE HANDLER FUNCTIONS
import { getPosts, createPosts } from "../controllers/posts.js"


// CREATING THE EXPRESS ROUTER
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);

export default router;





