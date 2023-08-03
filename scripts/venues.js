import { getVenues, getBands } from "./database.js";

const venues = getVenues();

export const VenueList = () => {
  let html = "<ul>";

  for (const venue of venues) {
    html += `<li class="list"
            data-type="venue"
            data-id="${venue.id}"
            data-address="${venue.address}"
            data-feet="${venue.sqft}"
            data-occupy="${venue.occupancy}"
            data-name="${venue.name}">${venue.name}</li>`;
  }
  html += "</ul>";
  return html;
};

document.addEventListener("click", (click) => {
  const clicked = click.target;
  const venueId = clicked.dataset.id;
  if (clicked.dataset.type === "venue") {
    const bands = getBands();
    let string = ``
    for (const band of bands) {
      if (band.venueId === parseInt(venueId))
      string += `${band.name}, `
       }   
      window.alert(`The ${clicked.dataset.name} if hosting ${string.slice(0, -2)}`);
 

  }
});
