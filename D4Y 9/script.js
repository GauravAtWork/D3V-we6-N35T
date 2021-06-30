let container = document.getElementById("container");

for (let i = 0; i < 36; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");
let booked = document.querySelector(".booked");
let remaining = document.querySelector(".remaining");

const updateSeat = (seats) => {
  booked.innerText = seats;
  remaining.innerText = 36 - seats;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let bookedValue = parseInt(booked.innerText);
    if (box.classList.contains("boxClicked")) {
      box.classList.remove("boxClicked");
      updateSeat(bookedValue - 1);
    } else {
      box.classList.add("boxClicked");
      updateSeat(bookedValue + 1);
    }
  });
});