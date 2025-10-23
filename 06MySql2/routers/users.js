import express from "express";
import {
  getsUsers,
  createdUsers,
  removeUsers,
  updateUsers,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getsUsers);
router.post("/", createdUsers);
router.put("/:id", updateUsers);
router.delete("/:id", removeUsers);

export default router;
