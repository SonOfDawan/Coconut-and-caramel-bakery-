const seeMoreButton = document.getElementById("see-more-btn");

if (seeMoreButton) {
  seeMoreButton.addEventListener("click", () => {
    window.location.href = "auth.html";
  });
}
