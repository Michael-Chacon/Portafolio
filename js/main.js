let menu = document.querySelector(".navMenu");
document.querySelector(".btnMenu").addEventListener("click", function () {
  menu.classList.toggle("active");
  console.log("vivo");
});

document.querySelector(".navMenu").addEventListener("click", function () {
  menu.classList.remove("active");
  console.log("tal");
});