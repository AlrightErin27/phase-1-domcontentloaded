document.addEventListener("DOMContentLoaded", function (e) {
  //   console.log("The DOM has loaded");
  //e.preventDefault();
  const text = document.querySelector("#text");
  console.log(text.innerHTML);
  text.innerHTML = "This is really cool!";
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
