function setupObserver(nodeToWatch) {
  const observer = new MutationObserver((mutations, instance) => {
    placeMarker(currentTarget);
  });
  observer.observe(nodeToWatch, {
    childList: true,
    subtree: true,
  });
}
