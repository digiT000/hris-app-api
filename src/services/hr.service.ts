import { PrismaClient } from "@prisma/client";
import { Leave, LeaveStatus } from "../models/model";

export class HRService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async approveLeave(data: Leave) {
    const leave: Leave = {
      id: data.id,
      leaveStatus: data.leaveStatus,
    };
    return await this.prisma.leave.update({
      where: { id: leave.id },
      data: { leaveStatus: LeaveStatus.APPROVED },
    });
  }

  async getClockIn() {
    return await this.prisma.clockIn.findMany();
  }
}
