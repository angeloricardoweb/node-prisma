import { Router } from "express";
import { CreateLeadController } from "./app/controllers/lead/CreateLeadController";
import { ListLeadController } from "./app/controllers/lead/ListLeadController";
import { RemoveLeadController } from "./app/controllers/lead/RemoveLeadController";

const createLeadController = new CreateLeadController();
const listLeadController = new ListLeadController();
const removeLeadController = new RemoveLeadController();

const router = Router();

router.get("/api/v1", (req, res) => {
  res.json({ server: "online" });
});

router.post("/api/v1/lead", createLeadController.handle);
router.post("/api/v1/lead", createLeadController.handle);
router.get("/api/v1/lead", listLeadController.handle);
router.delete("/api/v1/lead/:id", removeLeadController.handle);

export { router };
