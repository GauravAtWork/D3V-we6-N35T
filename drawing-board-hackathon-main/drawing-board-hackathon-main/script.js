let container = document.querySelector(".resize-me");

can = document.querySelector("canvas");
context = can.getContext("2d");

context.strokeStyle = "black";
context.lineWidth = 1;
context.lineCap = "round";

window.addEventListener("load", function () {
  var clear = document.getElementById("clear");
  var paint = false;

  can.addEventListener("mouseup", finish);
  can.addEventListener("mousemove", draw);
  clear.addEventListener("click", clearContent);
  can.addEventListener("mousedown", painting);

  function clearContent() {
    context.clearRect(0, 0, can.width, can.height);
  }

  function painting() {
    paint = true;
    context.beginPath();
  }

  function finish() {
    paint = false;
  }

  function draw(e) {
    if (!paint) return 0;
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    context.lineTo(x, y);
    context.stroke();
  }

  setCanvasSize();
});

const setCanvasSize = () => {
  can = document.querySelector("canvas");
  let widthToBeSet = window.innerWidth * 1;
  let heightToBeSet = window.innerHeight * 1;
  can.width = widthToBeSet;
  can.height = heightToBeSet;
};

// You don't resize the document but the window.
window.addEventListener("resize", () => {
  setCanvasSize();
});

window.addEventListener("resize", setCanvasSize());

const changePenColor = (t) => {
  context.strokeStyle = t.value;
};

const changeBgColor = (t) => {
  can.style.backgroundColor = t.value;
};

const changeWidth = (t) => {
  context.lineWidth = t.value;
  document.querySelector("span").innerHTML = t.value;
};

let eraser = document.querySelector(".eraser");
let pen = document.querySelector(".pen");

eraser.addEventListener("click", () => {
  context.globalCompositeOperation = "destination-out";
});

pen.addEventListener("click", () => {
  context.globalCompositeOperation = "source-over";
});
