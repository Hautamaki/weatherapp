const api_url = "http://api.weatherapi.com/v1/current.json?key=";
const api_key = "082903d1d3604946acc100812233103";
const api_location = "&q=Espoo";
const api_aqi = "&aqi=no";

const full_api = api_url + api_key + api_location + api_aqi;

async function getapi(url) {
    const response = await fetch(url);

    let data = await response.json();

    console.log(data);
    if(response) {
        console.log("data näkyvissä");
    }
    show(data);
}

getapi(full_api);

function show(data) {
    // Shows the fetched data on html
    document.getElementById("location").innerHTML = data.location.name + ", " + data.location.country;
    document.getElementById("temperature").innerHTML = data.current.feelslike_c;

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