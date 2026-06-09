import type { Project } from "@/types/projects";
export const useAddProject = () => {
  const fnAddProject = (project: Project[]) => {
    const projectToAdd: Project = {
      id: 1,
      name: "project_name_xxx",
      devs: [
        {
          name: "dev_name_1",
          initials: "DN",
          image: "maykid24x",
        },
      ],
      description: ["description1A"],
      dueDate: "2024-12-31",
      priority: "High",
      progress: 0,
    };

    project.push(projectToAdd);
    console.log("Project added:", project);
  };

  return { fnAddProject };
};
