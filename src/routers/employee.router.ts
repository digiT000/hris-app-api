import { EmployeeController } from "../controllers/employee.controller";
import { Router } from "express";

const router = Router();
const employeeController = new EmployeeController();

router.post("/clock-in", employeeController.clockIn.bind(employeeController));
router.post("/clock-out", employeeController.clockOut.bind(employeeController));
router.post(
  "/leave-request",
  employeeController.leaveRequest.bind(employeeController)
);

export default router;
