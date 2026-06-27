<script setup lang="ts">
import { ref } from "vue";
import type { Project, ProjectForm } from "@/types/projects";
import { useStorage } from "@vueuse/core";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import DatePicker from "primevue/datepicker";
import Button from "primevue/button";
import Dialog from "primevue/dialog";

// import { useAddProject } from "@/composables/useAddProject";

// ref / const
const visible = ref(false);

const form = ref<ProjectForm>({
  name: "",
  description: "",
  startDate: null,
  endDate: null,
  devs: [""],
});

// const selectedDev = ref();
// const countries = ref([
//   {
//     name: "Philippines",
//     code: "PH",
//   },
//   {
//     name: "United States",
//     code: "US",
//   },
//   {
//     name: "Japan",
//     code: "JP",
//   },
//   {
//     name: "Singapore",
//     code: "SG",
//   },
// ]);

// functions
const fnAddProject = () => {
  try {
    const storedProjects = useStorage("stored-projects", []);
    // TO DO: Fix form payload error
    // storedProjects.value.push(form.value);
    // useAddProject().fnAddProject(form.value);
    // visible.value = false;
  } catch (error: unknown) {
    return error;
  }
};

const toggle = () => {
  visible.value = true;
};
</script>

<template>
  <div class="card flex justify-center">
    <!-- <Button label="Show" @click="visible = true" /> -->
    <!-- <div>
      <img
        src="/src/assets/svg/kebab.svg"
        class="hover:bg-primary-100/10 block size-5.5 w-fit rounded-full duration-150 ease-in-out"
        @click="toggle"
      />
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div> -->

    <!-- useAddProject().fnAddProject(props?.projects) -->
    <button
      class="border-c3c6d7 text-191c1e hover:bg-c3c6d7/10 ml-auto rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200"
      @click="toggle"
    >
      Add Project
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      header="Update project details"
      :style="{ width: '25rem' }"
    >
      <div class="mb-8 space-y-4 font-semibold">
        <div>
          <label for="username" class="mb-1 block">Project Name</label>
          <InputText v-model="form.name" id="username" class="w-full" autocomplete="off" />
        </div>

        <div>
          <label for="email" class="mb-1 block">Description</label>
          <Textarea v-model="form.description" rows="3" class="w-full" />
        </div>

        <div class="flex justify-between gap-4">
          <div>
            <label for="email" class="mb-1 block">Start Date</label>
            <DatePicker v-model="form.startDate" class="w-full" :manualInput="false" />
          </div>

          <div>
            <label for="email" class="mb-1 block">End Date</label>
            <DatePicker
              v-model="form.endDate"
              dateFormat="dd/mm/yy"
              class="w-full"
              :manualInput="false"
            />
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">DEVS ASSIGNED</h2>
        <div class="">
          <!-- <div v-for="dev in props.project.devs" :key="dev.name" class="flex items-center gap-2">
            <div
              class="bg-004ac6/10 flex size-8 items-center justify-center overflow-hidden rounded-full border-4 border-white"
            >
              <template v-if="dev.image">
                <img :src="`/developers/${dev.image}.png`" :alt="dev.name" />
              </template>
              <template v-else>
                <p class="text-xs font-semibold">{{ dev.initials }}</p>
              </template>
            </div>

            <p class="text-434655 text-base">{{ dev.name }}</p>
          </div> -->

          <button
            class="bg-505f76 mt-5 cursor-pointer rounded-lg px-4 py-1 text-lg font-medium text-white"
          >
            Add
          </button>
        </div>
      </div>

      <div class="mt-5 flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="fnAddProject"></Button>
      </div>
    </Dialog>
  </div>
</template>
