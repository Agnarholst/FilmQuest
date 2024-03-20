//------------------------CSV-BEHANDLING--------------------------------->

// Her skal jeg laste inn watchlist.csv-filen og gjøre slik at det mulig å
// hente ønsket informasjon fra de fire kategoriene:
// Date,Name,Year,Letterboxd URI.

//------------------------CSV-BEHANDLING---------------------------------|

// import Papa from 'papaparse';
// const file = new File("/letterboxd_data/watchlist.csv")
// Papa.parse(file, {
//     complete: function (results) {
//         console.log("Finished: ", results.data)
//     }
// });

let data = '{ "films" : [' +
    '{ "Date": "2018-04-30", "Name": "Isle of Dogs", "Year": 2018, "Letterboxd URI": "https://boxd.it/dZrW" },' +
    '{ "Date": "2018-04-30", "Name": "You Were Never Really Here", "Year": 2017, "Letterboxd URI": "https://boxd.it/dWOS" },' +
    '{ "Date": "2018-05-03", "Name": "Ralph Breaks the Internet", "Year": 2018, "Letterboxd URI": "https://boxd.it/edAy" } ]}';

let obj = JSON.parse(data);

let watchList = obj.films;

let randomFilm = watchList[randomNum()]
let filmTitle = document.getElementById("filmTitle");

filmTitle.innerHTML = randomFilm.Name


// Returns random number based on length of film list 
function randomNum() {
    const listLength = watchList.length
    let randomizer = Math.ceil(Math.random() * listLength) - 1
    return randomizer
}

