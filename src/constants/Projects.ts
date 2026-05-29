import type { Project, UpcomingProject, OnHoldProject } from "@/types/projects";

export const projectList: Project[] = [
  {
    id: 1,
    name: "project_name_1",
    devs: [
      {
        name: "dev_name_1",
        initials: "DN",
        image: "maykid24x",
      },
      {
        name: "dev_name_2",
        initials: "DN",
        image: "maykid24x",
      },
      {
        name: "dev_name_3",
        initials: "DN",
        image: "maykid24x",
      },
    ],
    description: ["description1A", "description1B", "description1C"],
    dueDate: "2024-12-31",
    priority: "High",
    progress: 10,
  },
  {
    id: 2,
    name: "project_name_2",
    devs: [
      {
        name: "dev_name_1",
        initials: "DN",
        image: undefined,
      },
      {
        name: "dev_name_2",
        initials: "DN",
        image: undefined,
      },
    ],
    description: ["description2A", "description2B"],
    dueDate: "2024-12-31",
    priority: "Low",
    progress: 70,
  },
  {
    id: 3,
    name: "project_name_3",
    devs: [
      {
        name: "dev_name_1",
        initials: "DN",
        image: undefined,
      },
    ],
    description: ["description3A"],
    dueDate: "2024-12-31",
    priority: "Medium",
    progress: 50,
  },
  {
    id: 4,
    name: "project_name_4",
    devs: [
      {
        name: "dev_name_1",
        initials: "DN",
        image: undefined,
      },
      {
        name: "dev_name_2",
        initials: "DN",
        image: undefined,
      },
    ],
    description: ["description4A", "description4B"],
    dueDate: "2024-12-31",
    priority: "Low",
    progress: 60,
  },
];

export const UpcomingProjectList: UpcomingProject[] = [
  {
    id: 1,
    name: "Upcoming Project 1",
    description: [
      "Upcoming project description 1A",
      "Upcoming project description 1B",
      "Upcoming project description 1C",
    ],
    startDate: "TBD",
    priority: "High",
  },
  {
    id: 2,
    name: "Upcoming Project 2",
    description: ["Upcoming project description 2A"],
    startDate: "TBD",
    priority: "Medium",
  },
  {
    id: 3,
    name: "Upcoming Project 3",
    description: ["Upcoming project description 3A", "Upcoming project description 3B"],
    startDate: "2024-02-01",
    priority: "Low",
  },
  {
    id: 4,
    name: "Upcoming Project 4",
    description: [
      "Upcoming project description 4A",
      "Upcoming project description 4B",
      "Upcoming project description 4C",
    ],
    startDate: "2024-02-01",
    priority: "NONE",
  },
  {
    id: 5,
    name: "Upcoming Project 5",
    description: ["Upcoming project description 5A"],
    startDate: "2024-02-01",
    priority: "Critical",
  },
];

export const OnHoldProjectList: OnHoldProject[] = [
  {
    id: 1,
    name: "Onhold Project 1",
    description: ["Onhold project description 1A"],
    status: "PENDING APPROVAL",
  },
  {
    id: 2,
    name: "Onhold Project 2",
    description: [
      "Onhold project description 2A",
      "Onhold project description 2B",
      "Onhold project description 3C",
    ],
    status: "PAUSED",
  },
  {
    id: 3,
    name: "Onhold Project 3",
    description: ["Onhold project description 3A"],
    status: "SCRAPPED",
  },
  {
    id: 4,
    name: "Onhold Project 4",
    description: ["Onhold project description 4A", "Onhold project description 4B"],
    status: "NONE",
  },
];
