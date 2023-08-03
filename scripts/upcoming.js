import { getBands } from "./database.js";
import { getVenues } from "./database.js";

const startDate = new Date("2023-08-03");
const endDate = new Date("2024-02-28");
function getRandomDate(startDate, endDate) {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);
  return randomDate.toISOString().slice(0, 10);
}

export const UpcomingShows = () => {
  const bands = getBands();
  const venues = getVenues();
  let html = `<ul class="vb">`;
  for (const venue of venues) {
    for (const band of bands) {
      if (band.venueId === venue.id) {
        const randomDate = getRandomDate(startDate, endDate);
        html += `
        <li class="bandvenue" data-type="band" data-band="${band.name}"><div class="bandlist">${band.name}</div> will be playing at The ${venue.name} on: <b>${randomDate}</b> </li>`;
      }
    }
  }
  html += `</ul>`;
  return html;
};
//

document.addEventListener("click", (click) => {
  const clicked = click.target;

  if (clicked.dataset.type === "band") {
    const bands = getBands();
    

    for (const band of bands) {
      if (clicked.dataset.band === band.name)
        window.alert(` 
            The ${band.name}
            Genre: ${band.genre}
            The band was formed ${band.formed}
            They have ${band.members} band members`);
    }
  }
});
