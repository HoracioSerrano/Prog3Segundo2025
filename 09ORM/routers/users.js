import { Router } from "express";
import { getsUsers, createdUser } from "../controllers/users.js";

const router = Router();

router.get("/", getsUsers);
router.post("/", createdUser);

export default router;
