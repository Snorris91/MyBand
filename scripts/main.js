import { BandList } from "./bands.js"
import { VenueList } from "./venues.js"
import { UpcomingShows } from "./upcoming.js"



const maincontainer = document.querySelector("#container")


const html = `
<h1>Bands and Venues</h1>
    <section class="bookings">
        <h2>Current Bookings</h2>
        ${UpcomingShows()}
    </section>
    <article class="details">
        <section class="venues">
        <h2>Vanues!</h2>
        ${VenueList()}
        </section>
        <section class="bands">
        <h2>Bands!</h2>
        ${BandList()}
        </section>
    </article>

`

maincontainer.innerHTML = html
