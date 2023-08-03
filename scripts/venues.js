import { getVenues } from "./database.js";

const venues = getVenues();

export const VenueList = () => {
  let html = "<ul>";

  for (const venue of venues) {
    html += `<li class="list"
            data.id="${venue.id}"
            data-address="${venue.address}"
            data-feet="${venue.sqft}"
            data-occupy="${venue.occupancy}"
            data-name="${venue.name}">${venue.name}</li>`;
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