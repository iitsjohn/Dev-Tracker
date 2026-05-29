export type DeveloperRole = "Frontend" | "Backend" | "Fullstack" | "DevOps";
export interface DevStatus {
  id: number;
  name: string;
  role: DeveloperRole;
  projectStatus: string | null;
  projectName: string | null;
  deployed: boolean;
}
