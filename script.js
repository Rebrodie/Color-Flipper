const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function changeColor() {
  let text = document.getElementById("text");
  let color = randomHex();
  text.textContent = "Background Color: " + color;
  document.body.style.backgroundColor = color;
}
function randomHex() {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    randomHex += hex[random];
  }
  return randomHex;
}
window.addEventListener("load", () => {
  changeColor();
});
