//------------------------CSV-BEHANDLING--------------------------------->

// Her skal jeg laste inn watchlist.csv-filen og gjøre slik at det mulig å
// hente ønsket informasjon fra de fire kategoriene:
// Date,Name,Year,Letterboxd URI.

//------------------------CSV-BEHANDLING---------------------------------|

import Papa from 'papaparse';


const file = new File("/letterboxd_data/watchlist.csv")

Papa.parse(file, {
    complete: function (results) {
        console.log("Finished: ", results.data)
    }
});

let test = document.getElementById("filmTitle");

test.innerHTML = "Lord of the Rings: The Fellowship of the Ring"