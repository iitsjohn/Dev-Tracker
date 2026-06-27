import type { ProjectForm } from "@/types/projects";
// import { useStorage } from "@vueuse/core";

export const useAddProject = () => {
  const fnAddProject = (project: ProjectForm) => {
    return console.log("Project added:", project);
  };

  return { fnAddProject };
};
