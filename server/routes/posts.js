import express from "express";
import { getFeedPosts, getUserPosts, likedPosts } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/**read */

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/**update */

router.patch("/:id/like", verifyToken, likedPosts);

export default router;