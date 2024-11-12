import { Router } from "express";
import { HRController } from "../controllers/hr.controller";

const router = Router();
const hrController = new HRController();

router.patch("/aprove-leave", hrController.approveLeave.bind(hrController));
router.get("/clock-ins", hrController.getClocksIn.bind(hrController));

export default router;
