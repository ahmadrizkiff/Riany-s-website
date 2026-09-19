const surpriseBtn = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");

surpriseBtn.addEventListener("click", () => {
  const isHidden = letter.hasAttribute("hidden");

  if (isHidden) {
    letter.removeAttribute("hidden");
    surpriseBtn.textContent = "close this ♡";
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    letter.setAttribute("hidden", "");
    surpriseBtn.textContent = "open this ♡";
  }
});
