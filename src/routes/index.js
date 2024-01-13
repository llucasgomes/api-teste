import { Router } from "express";
import { getTest } from "../controllers/get.js";
import { postTest } from "../controllers/post.js";

const router = Router();


router.get("/", getTest);
router.post("/", postTest);


export default router;