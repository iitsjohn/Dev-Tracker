export type Priority = "High" | "Low" | "Medium" | "Critical" | "NONE";
export type HoldStatus = "PAUSED" | "PENDING APPROVAL" | "NONE";

export interface Project {
  id: number;
  name: string;
  devs: {
    name: string;
    initials: string;
    image: string | undefined;
  }[];
  description?: string[] | [];
  dueDate?: string | null;
  priority: Priority;
  progress?: number;
}

export interface UpcomingProject {
  id: number;
  name: string;
  description?: string[] | [];
  startDate?: string | "TBD";
  priority: Priority;
}

export interface OnHoldProject {
  id: number;
  name: string;
  description?: string[] | [];
  status: HoldStatus;
}

export interface ProjectForm {
  name: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  devs: string[];
}
