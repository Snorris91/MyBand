import { getBands } from "./database.js";

const bands = getBands();

export const BandList = () => {
  let html = `<ul>`;

  for (const band of bands) {
    html += `<li class="list"
            data.id="${band.id}"
            data-members="${band.members}"
            data-genre="${band.genre}"
            data-found="${band.formed}"
            data-name="${band.name}">${band.name}</li>`;
  }
  html += "</ul>";
  return html;
};


document.addEventListener(
    "click",
    (click) => {
        const clicked = click.target
    }
)