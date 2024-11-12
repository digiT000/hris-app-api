export interface Employee {
  id: number;
  name?: string;
  email?: string;
  role?: Role;
  clockIns?: ClockIns[];
  leaves?: Leave[];
}

export interface ClockIns {
  id?: number;
  employeeId?: number;
  clockInTime?: Date;
  clockOutTime?: Date;
}

export interface Leave {
  id?: number;
  employeeId?: number;
  startDate?: Date;
  endDate?: Date;
  leaveType?: LeaveType;
  leaveStatus?: LeaveStatus;
}

export enum Role {
  HR = "HR",
  EMPLOYEE = "EMPLOYEE",
}
export enum LeaveType {
  ANNUAL = "ANNUAL",
  SICK = "SICK",
  MATERNITY = "MATERNITY",
}
export enum LeaveStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}
