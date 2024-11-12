import { Request, Response } from "express";
import { EmloyeeService } from "../services/employee.service";
import { ClockIns, Employee, Leave } from "../models/model";

export class EmployeeController {
  private employeService: EmloyeeService;
  constructor() {
    this.employeService = new EmloyeeService();
  }

  async clockIn(req: Request, res: Response) {
    const { employeeId } = req.body;
    const emloyee: Employee = {
      id: employeeId,
    };

    try {
      const result = await this.employeService.clockIn(emloyee);
      if (result) {
        res.status(201).send({
          message: "Clock-in successful",
          data: result,
        });
      } else {
        res.status(400).send({
          message: "Failed to clock-in",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
  async clockOut(req: Request, res: Response) {
    const { id }: ClockIns = req.body;
    const clockIn: ClockIns = {
      id: id,
    };

    try {
      const result = await this.employeService.clockOut(clockIn);
      if (result) {
        res.status(200).send({
          message: "Clock-out successful",
          data: result,
          status: res.statusCode,
        });
      } else {
        res.status(400).send({
          message: "Failed to clock-out",
          status: res.statusCode,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
  async leaveRequest(req: Request, res: Response) {
    const { employeeId, leaveType, startDate, endDate }: Leave = req.body;
    const leave: Leave = {
      employeeId: employeeId,
      leaveType: leaveType,
      startDate: new Date(startDate as Date),
      endDate: new Date(endDate as Date),
    };

    try {
      const result = await this.employeService.leaveRequest(leave);
      if (result) {
        res.status(201).send({
          message: "Leave request successful",
          data: result,
          status: res.statusCode,
        });
      } else {
        res.status(400).send({
          message: "Failed to request leave",
          status: res.statusCode,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
}
