const mark = document.querySelector(".mark");
const angela = document.querySelector(".angela");
const thompson = document.querySelector(".thompson");
const redNoseOne = document.querySelector(".red__one");
const numberThree = document.querySelector(".three");
const numberTwo = document.querySelector(".two");
const numberOne = document.querySelector(".one");
const numberNull = document.querySelector(".null");
const red__two = document.querySelector(".red__two");
const red__three = document.querySelector(".red__three");

console.log(mark);
console.log(angela);
console.log(thompson);

mark.addEventListener("click", function () {
  numberThree.classList.add("hidden");
  numberTwo.classList.remove("hidden");
  redNoseOne.classList.add("hidden");
  document.querySelector(".mark").style.backgroundColor = "#fff";
});

angela.addEventListener("click", function () {
  numberTwo.classList.add("hidden");
  numberOne.classList.remove("hidden");
  red__two.classList.add("hidden");
  document.querySelector(".angela").style.backgroundColor = "#fff";
});

thompson.addEventListener("click", function () {
  numberOne.classList.add("hidden");
  numberNull.classList.remove("hidden");
  red__three.classList.add("hidden");
  document.querySelector(".thompson").style.backgroundColor = "#fff";
});
