const button = document.createElement("button");
button.classList.add("ripple-button");
button.append("Ripple");

const rippleSpan = document.createElement("span");
rippleSpan.classList.add("ripple");

document.querySelector("body").appendChild(button);

button.addEventListener("click", (e) => {
  if (button.children.length > 0) {
    button.children[0].remove();
  }

  const x = e.offsetX;
  const y = e.offsetY;

  rippleSpan.style.left = x + "px";
  rippleSpan.style.top = y + "px";
  button.appendChild(rippleSpan);

  setTimeout(() => {
    if (button.children.length > 0) {
      button.children[0].remove();
    }
  }, 600);
});
