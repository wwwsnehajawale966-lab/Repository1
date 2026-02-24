document.addEventListener("DOMContentLoaded", function () {
  /* ========= MENU ACTIVE EFFECT ========= */
  const menuLinks = document.querySelectorAll("#menu a");

  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  /* ========= BOX CLICK EFFECT ========= */
  const boxes = document.querySelectorAll(".clickable");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.style.backgroundColor = "#dbeafe";
    });
  });

  /* ========= ADMISSION ALERT ========= */
  const admissionBtn = document.getElementById("admissionBtn");
  if (admissionBtn) {
    admissionBtn.addEventListener("click", function () {
      alert("Admission Open! Please fill the form carefully.");
    });
  }

  /* ========= SOCIAL MEDIA HOVER ========= */
  const icons = document.querySelectorAll(".imgh");
  icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.style.transform = "scale(1.2)";
    });

    icon.addEventListener("mouseout", () => {
      icon.style.transform = "scale(1)";
    });
  });

  /* ========= IMAGE SLIDER ========= */
  const schoolImage = document.getElementById("schoolImage");

  if (schoolImage) {
    const images = [
      "./imge/school 3.jpg",
      "./imge/school 2.jpg",
      "./imge/school 1.jpg",
    ];

    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      schoolImage.src = images[index];
    }, 3000);
  }
});
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});