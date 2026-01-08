
document.getElementById('year').textContent = new Date().getFullYear();

// Render Experience
const expRoot = document.getElementById('experience-list');
EXPERIENCE.forEach(e => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h3>${e.role} - ${e.company}</h3><p>${e.period}</p><ul>${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
  expRoot.appendChild(div);
});

// Render Projects
const projectRoot = document.getElementById('project-grid');
PROJECTS.forEach(p => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><a hrefk}View Project</a>`;
  projectRoot.appendChild(div);
});
// Optional: Add smooth scrolling or animations later
