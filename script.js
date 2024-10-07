// JAVASCRIPT CODE

const demo = document.getElementById("demo");

function TextDisplay(input) {
  demo.value += input;
}
function clearDisplay() {
  demo.value = "";
}
function valueDisplay() {
  try {
    demo.value = eval(demo.value);
  } catch {
    demo.value = "NaN";
  }
}
