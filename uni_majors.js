const uniMajors = [
  {
    name: "Informatik",
    modules: [{ name: "GTI" }, { name: "SWT" }, { name: "RA" }]
  },

  {
    name: "Architektur",
    modules: [{ name: "module1" }, { name: "module2" }, { name: "module3" }]
  },
  {
    name: "Jura",
    modules: [{ name: "module1" }, { name: "module2" }, { name: "module3" }]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const majorItems = document.querySelectorAll(".major");

  majorItems.forEach((majorItem) => {
    majorItem.addEventListener("click", (event) => {
      event.stopPropagation();

      const existingModules = majorItem.querySelector("ul.modules");
      if (existingModules) {
        existingModules.remove();
        return;
      }

      const majorName = majorItem.dataset.major || majorItem.textContent.trim();
      const majorData = uniMajors.find((major) => major.name === majorName);

      if (!majorData) return;

      const modulesList = document.createElement("ul");
      modulesList.className = "modules";

      majorData.modules.forEach((module) => {
        const moduleItem = document.createElement("li");
        const moduleLink = document.createElement("a");
        moduleLink.href = "Module.html";
        moduleLink.textContent = module.name;
        moduleItem.appendChild(moduleLink);
        modulesList.appendChild(moduleItem);
      });

      majorItem.appendChild(modulesList);
    });
  });
});