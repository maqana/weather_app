// Open weather API
const api_key = '9cef9e401faa896c30ab110f48e86426'; // From https://home.openweathermap.org/api_keys

window.addEventListener('load', () => {
    let lon;
    let lat;
    // Accessing Geolocation of User
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={api_key}&units=metric`;

        // Using fetch to retrieve the data from the api call
        fetch(base)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { temp } = data.main;
                const place = data.name;
                const { description, icon } = data.weather[0];
                const { sunrise, sunset } = data.sys;
            })
    });
  }
});

