import { Employee, ClockIns, Leave, LeaveType } from "../models/model";
import { PrismaClient } from "@prisma/client";

export class EmloyeeService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async clockIn(data: Employee) {
    const employee: Employee = {
      id: data.id,
    };
    return await this.prisma.clockIn.create({
      data: {
        employeeId: employee.id,
        clockInTime: new Date(),
      },
    });
  }

  async clockOut(data: ClockIns) {
    const clockIn: ClockIns = {
      id: data.id,
    };
    return await this.prisma.clockIn.update({
      where: {
        id: clockIn.id,
      },
      data: {
        clockOutTime: new Date(),
      },
    });
  }

  async leaveRequest(data: Leave) {
    const leave: Leave = {
      employeeId: data.employeeId,
      startDate: data.startDate,
      endDate: data.endDate,
      leaveType: data.leaveType,
    };
    return await this.prisma.leave.create({
      data: {
        employeeId: leave.employeeId as number,
        startDate: leave.startDate as Date,
        endDate: leave.endDate as Date,
        leaveType: leave.leaveType as LeaveType,
      },
    });
  }
}
