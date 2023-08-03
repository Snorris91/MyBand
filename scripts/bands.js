import { getBands, getVenues } from "./database.js";

const bands = getBands();

export const BandList = () => {
  let html = `<ul>`;

  for (const band of bands) {
    html += `<li class="list"
            data-type="band"
            data-id="${band.id}"
            data-fkey="${band.venueId}"
            data-members="${band.members}"
            data-genre="${band.genre}"
            data-found="${band.formed}"
            data-name="${band.name}">${band.name}</li>`;
  }
  html += "</ul>";
  return html;
};

document.addEventListener("click", (click) => {
  const clicked = click.target;
  const venueId = clicked.dataset.fkey;

  if (clicked.dataset.type === "band") {
    const venues = getVenues();
    for (const venue of venues) {
      if (parseInt(venueId) === venue.id) {
        window.alert(
          `The ${clicked.dataset.name} will be playing at The ${venue.name}`
        );
      }
    }
  }
});
