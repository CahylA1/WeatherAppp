// const and variables 
let weatherData;
const API_KEY = "b668695448bf0e1a07c7430b9f221004";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Cache Elements 
const $city = $('#city')
const $temp = $('#temp');
const $form = $('form');
const $input = $('input[type="text"]')

// Event Listener 

$form.on('submit', handleGetData )

// Functions 

function handleGetData(event) {

    event.preventDefault(); // turns off default page refresh behavior
    console.log(event);

    const weatherData = $input.val(); // grabs value from input tag
    $input.val("");// returns an empty string to reset value

    $.ajax(`${BASE_URL}?q=${city}&appid=${API_KEY}`).then(
    (data) => {
        weatherData = data;
        render();
    },
    function (error) {
      console.error(error);
    }
  );
}

function render() {
    $city.text(weatherData.Name)
    $temp.text(weatherData.Temp)
}

