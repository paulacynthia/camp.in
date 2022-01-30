let btn = document.querySelector(".icon-eye");

btn.addEventListener("click", function () {
  let input = document.querySelector("#lock");

  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
