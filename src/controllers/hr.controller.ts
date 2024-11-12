import { Request, Response } from "express";
import { HRService } from "../services/hr.service";
import { Leave } from "../models/model";

export class HRController {
  private hrService: HRService;

  constructor() {
    this.hrService = new HRService();
  }

  async approveLeave(req: Request, res: Response) {
    const { id, leaveStatus }: Leave = req.body;

    const leave: Leave = {
      id: id,
      leaveStatus: leaveStatus,
    };
    try {
      const result = await this.hrService.approveLeave(leave);
      if (result) {
        res.status(200).send({
          message: "Leave approved successfully",
          data: result,
          status: res.statusCode,
        });
      } else {
        res.status(400).send({
          message: "Error approving leave",
          data: null,
          status: res.statusCode,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Error occurred while approving leave",
        data: null,
        status: res.statusCode,
      });
    }
  }

  async getClocksIn(req: Request, res: Response) {
    try {
      const result = await this.hrService.getClockIn();
      if (result) {
        res.status(200).send({
          message: "Success retreive data",
          data: result,
          status: res.statusCode,
        });
      } else {
        res.status(400).send({
          message: "Failed to get data",
          data: null,
          status: res.statusCode,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal Server Error",
        data: null,
        status: res.statusCode,
      });
    }
  }
}
