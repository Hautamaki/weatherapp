
const api_url = "http://api.weatherapi.com/v1/current.json?key=";
const api_key = "082903d1d3604946acc100812233103";
const api_location = "&q=Tampere";
const api_aqi = "&aqi=no";
const lang = "&lang=fi";

const full_api = api_url + api_key + api_location + api_aqi + lang;



async function getapi(url) {
    // get weather api data
    const response = await fetch(url);

    let data = await response.json();

    console.log(data);
    if(response) {
        console.log("data näkyvissä");
    }


    //test
    

    //
    show(data);
}

// THIS MIGTH WORK OR MIGHT NOT BUT MOST LIKELY WILL WORK
// BUT NEEDS TO BE TESTED WITH LOCAL SERVER (TRY LOCALHOST)
// PLUGIN ON HOME PC. MOST LIKELY WILL WORK THEN!
let file = "./backgrounds.json";

fetch(file)
.then(x => x.text())
.then(y => console.log(y))


        


getapi(full_api);

function show(data) {

    //data for background from json



    //const pather = datajson + "." + data.current.condition.code;
    //test for the niilo video
    //console.log(pather);
    if(data) {
        
         
    }
    else {
        //if not predefined weather text exist, shows nothigng
        weathertext = "";
    }

    // Shows the fetched data on html
    document.getElementById("location").innerHTML = data.location.name + ", " + data.location.country;
    document.getElementById("temperature").innerHTML = data.current.temp_c + " °C";
    document.getElementById("text").innerHTML = data.current.condition.text;
    //document.getElementById("text").innerHTML = weathertext;



    // Gets the data for the current weather icon
    // If you want to use own icons (or just local) for the app, put them inside /cdn.weatherapp.com/weather/64x64/[day or night]/[filename ex. 116.png]
    // and replace the image's link with just "data.current.condition.icon;"
    let iconLink = data.current.condition.icon;
    // Removes first who "/" characters from the link, because with those the site thiks they are local files
    let unwantedCharacter = "/";
    while( iconLink.charAt(0) == unwantedCharacter ) iconLink = iconLink.substring(1);
    // Adds https in front of the link again for the site to know it's not local link
    let newIconLink = "https://" + iconLink;
    document.getElementById("weaherIcon").src = newIconLink;
}