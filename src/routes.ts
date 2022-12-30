import { Router } from "express";
import { CreateUserController } from "./app/controllers/user/CreateUserController";

const createUserController = new CreateUserController();

const router = Router();

router.get("/api/v1", (req, res) => {
  res.json({ server: "online" });
});

router.post("/api/v1/user", createUserController.handle);

export { router };
