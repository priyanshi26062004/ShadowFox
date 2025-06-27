// Accordion toggles
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});

// Player profiles
const players = [
  {
    name: "MS Dhoni",
    role: "Captain & Wicket Keeper",

    desc: "Legendary captain known as 'Thala'. Led CSK to multiple IPL titles."
  },
  {
    name: "Ruturaj Gaikwad",
    role: "Opener",
    desc: "Promising young opener with a calm and composed style."
  },
  {
    name: "Ravindra Jadeja",
    role: "All-Rounder",
    desc: "Dynamic all-rounder, explosive with bat and dangerous with ball."
  },
  {
    name: "Moeen Ali",
    role: "All-Rounder",
    desc: "Versatile English all-rounder who provides strength in middle order."
  },
  {
    name: "Deepak Chahar",
    role: "Fast Bowler",
    desc: "CSK’s key powerplay bowler with swing and accuracy."
  }
];


const playerContainer = document.getElementById("playerContainer");
players.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.role}</p>
  `;
  card.onclick = () => showModal(p);
  playerContainer.appendChild(card);
});

// Modal
const modal = document.getElementById("playerModal");
const closeBtn = document.querySelector(".close-btn");
function showModal(p) {
  document.getElementById("modalName").innerText = p.name;
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalDesc").innerText = p.desc;
  modal.style.display = "block";
}
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Poll
document.getElementById("pollForm").addEventListener("submit", e => {
  e.preventDefault();
  const selected = document.querySelector('input[name="player"]:checked');
  const result = document.getElementById("pollResult");
  if (selected) {
    result.innerHTML = `<p>Thanks for voting for <strong>${selected.value}</strong>!</p>`;
  } else {
    result.innerHTML = `<p>Please select a player to vote.</p>`;
  }
});
