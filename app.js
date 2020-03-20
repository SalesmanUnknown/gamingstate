window.addEventListener("load", () => {
  const front = document.querySelector(".front");

  const tl = new TimelineMax();

  tl.fromTo(front, 1.0, { opacity: 0, x: 50 }, { opacity: 1, x: 0 });
});
