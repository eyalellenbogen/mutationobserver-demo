const items = [
  { name: "Lenoardo", img: "leonardo.jpg" },
  { name: "Raphael", img: "raphael.png" },
  { name: "Donatello", img: "donatello.jpg" },
  { name: "Michaelangelo", img: "michaelangelo.jpg" },
  { name: "Splinter", img: "splinter.png", hold: true }
];

let marker;
let root;
let xPos;
let yPos;
let currentTarget;
let isFirst = true;

function render(item, beforeTarget) {
  const container = root.querySelector("ul");
  const el = document.createElement("li");
  el.innerHTML = item.name;
  el.setAttribute("data-item", item.name);
  if (beforeTarget) {
    container.insertBefore(el, beforeTarget);
  } else {
    container.appendChild(el);
  }
  el.addEventListener("click", ev => {
    const links = root.querySelectorAll("li");
    links.forEach(x => x.classList.remove("selected"));
    select(ev.target.getAttribute("data-item"));
  });
}

function init() {
  root = document.querySelector(".the-menu");
  items
    .filter(x => !x.hold)
    .forEach(x => {
      render(x);
    });
}

function select(name) {
  const el = root.querySelector("[data-item=" + name + "]");
  el.classList.add("selected");

  placeMarker(el);

  const target = items.filter(x => x.name === name)[0];
  if (!target) {
    return;
  }
  document.querySelector(".view > img").src = "./images/" + target.img;
}

function add() {
  const current = root.querySelector(".selected");
  const currentItems = [...root.querySelectorAll("li")].map(x =>
    x.getAttribute("data-item")
  );
  const item = items.filter(x => currentItems.indexOf(x.name) < 0)[0];
  if (!item) {
    return;
  }
  render(item, current);
}

function remove() {
  const current = root.querySelector(".selected");
  let neighbor = current.nextElementSibling || current.previousElementSibling;
  if (!neighbor) {
    return;
  }
  current.parentElement.removeChild(current);
  select(neighbor.getAttribute("data-item"));
}

function makeEditable() {
  root
    .querySelectorAll("li")
    .forEach(x => x.setAttribute("contenteditable", "true"));
}

init();
initMarker(document.querySelector(".the-menu"));

select(items[0].name);
