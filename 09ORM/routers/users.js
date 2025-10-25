import { Router } from "express";
import { getsUsers } from "../controllers/users.js";

const router = Router();

router.get("/", getsUsers);

export default router;
