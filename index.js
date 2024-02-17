const tabLinksContainer = document.querySelector(".tab-titles");
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const closeIcon = document.getElementById("close-icon");
const menuIcon = document.getElementById("menu-icon");

tabLinksContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest(".tab-links");
  if (!clickedTab) return;

  tabLinks.forEach((tab) => tab.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-content"));

  // Add active class to the clicked tab link
  clickedTab.classList.add("active-link");

  // Get the target content ID and show it
  const targetContentId = clickedTab.textContent.trim().toLowerCase();
  const targetContent = document.getElementById(targetContentId);
  if (targetContent) {
    targetContent.classList.add("active-content");
  }
});

menuIcon.addEventListener("click", () => {
  sidemenu.style.right = "0";
});
closeIcon.addEventListener("click", () => {
  sidemenu.style.right = "-200px";
});
