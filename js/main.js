const seeMoreButton = document.getElementById("see-more-btn");

if (seeMoreButton) {
  seeMoreButton.addEventListener("click", () => {
    const destination = seeMoreButton.dataset.href || "auth.html";
    window.location.href = destination;
  });
}
