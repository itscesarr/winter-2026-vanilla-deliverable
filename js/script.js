const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Co",
    type: "frontend",
    description: "Built UI components using JavaScript.",
    details: "Worked on interactive dashboards and optimized performance."
  },
  {
    title: "Backend Developer",
    company: "Startup Inc",
    type: "backend",
    description: "Developed APIs and database systems.",
    details: "Implemented authentication and scalable architecture."
  }
];

const container = document.getElementById("experience");
const buttons = document.querySelectorAll("#filters button");

function renderExperiences(filter = "all") {
  container.innerHTML = "";

  const filtered = filter === "all"
    ? experiences
    : experiences.filter(exp => exp.type === filter);

  filtered.forEach(exp => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${exp.title}</h3>
      <p><strong>${exp.company}</strong></p>
      <p>${exp.description}</p>
      <button class="toggle">More</button>
      <div class="details">${exp.details}</div>
    `;

    const toggleBtn = card.querySelector(".toggle");
    toggleBtn.addEventListener("click", () => {
      card.classList.toggle("active");
      toggleBtn.textContent = card.classList.contains("active") ? "Less" : "More";
    });

    container.appendChild(card);
  });
}

// Filter buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    renderExperiences(btn.dataset.filter);
  });
});

// Initial render
renderExperiences();