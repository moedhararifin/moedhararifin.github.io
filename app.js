const drop = document.getElementById("drop");
const down = document.getElementById("down");
const img1 = document.getElementById("p1");
const img2 = document.getElementById("p2");
const box1 = document.getElementById("p1-1");
const box2 = document.getElementById("p2-1");

function resize(val) {
  if (window.innerWidth >= 600) {
    img1.style.height = val * box1.offsetHeight + "px";
    img2.style.height = val * box2.offsetHeight + "px";
  } else {
    img1.style.height = "300px";
    img2.style.height = "300px";
  }
}

drop.onclick = () => {
  if (down.style.display == "flex") {
    down.style.display = "none";
    drop.style.transform = "rotate(360deg)";
  } else {
    down.style.display = "flex";
    drop.style.transform = "rotate(270deg)";
  }
  return false;
};

resize(0.8);
