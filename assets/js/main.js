const refreshBtn = document.querySelector(".newColor-btn");
const container = document.querySelector(".container");
const maxpallateboxes = 32;
const generatepallate = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxpallateboxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    // console.log(randomHex);
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `  <div class="rect-box" style='background:${randomHex}'></div>
    <span class="hex-value">${randomHex}</span>`;
    color.addEventListener("click", () => copycolor(color, randomHex));
    container.appendChild(color);
  }
};
generatepallate();
const copycolor = (elem, Hexval) => {
  const colorE = elem.querySelector(".hex-value");
  navigator.clipboard.writeText(Hexval).then(() => {
    colorE.innerText = "copied";
    setTimeout(() => (colorE.innerText = Hexval), 1000);
  });
};
refreshBtn.addEventListener("click", generatepallate);
