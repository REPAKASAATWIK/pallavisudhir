const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".appointment-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "Patient";
    const department = data.get("department") || "Consultation";
    const phone = data.get("phone") || "";
    const date = data.get("date") || "preferred date";
    const message = `Hello Pallavi Sudhir Medicare, I am ${name}. I would like to book an appointment for ${department} on ${date}. Phone: ${phone}`;
    const encoded = encodeURIComponent(message);
    window.location.href = `https://wa.me/917382270565?text=${encoded}`;
  });
});
