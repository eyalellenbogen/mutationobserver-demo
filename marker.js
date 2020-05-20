function initMarker(target) {
  root = target;
  marker = document.createElement("div");
  marker.classList.add("the-marker", "off");
  root.appendChild(marker);
  const rootRect = root.getBoundingClientRect();
  xPos = rootRect.left;
  yPos = rootRect.bottom;

  setupObserver(root.querySelector("ul"));
}

function placeMarker(target) {
  currentTarget = target;
  const rect = target.getBoundingClientRect();
  marker.style.top = rect.bottom - yPos + rect.height + "px";
  marker.style.left = rect.left - xPos + "px";
  marker.style.width = rect.width + "px";
  if (isFirst) {
    setTimeout(() => {
      marker.classList.remove("off");
      isFirst = false;
    }, 0);
  }
}
