document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", () => {
    window.location.assign("./index.html");
  });
});

function returnToHome() {
  window.location.assign("./index.html");
}
