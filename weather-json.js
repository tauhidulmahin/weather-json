let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 15,
    "list": [  //array
      {   //array[0]
        "id": 2636389,
        "name": "Swindon",
        "coord": {
          "lat": 51.558,
          "lon": -1.7812
        },
        "main": {
          "temp": 6.75,
          "pressure": 1008,
          "humidity": 72,
          "temp_min": 6,
          "temp_max": 7
        },
        "dt": 1516197360,
        "wind": {
          "speed": 9.8,
          "deg": 260,
          "gust": 11.8
        },
        "sys": {
          "country": ""
        },
        "rain": null,
        "snow": null,
        "clouds": {
          "all": 75
        },
        "weather": [  //array[0]
          {
            "id": 521,
            "main": "Rain",
            "description": "proximity shower rain",
            "icon": "09d"
          }
        ]
      },
      {   //array[1]
        "id": 3333207,
        "name": "Borough of Swindon",
        "coord": {
          "lat": 51.5833,
          "lon": -1.75
        },
        "main": {
          "temp": 7,
          "pressure": 1008,
          "humidity": 72,
          "temp_min": 7,
          "temp_max": 7
        },
        "dt": 1516197360,
        "wind": {
          "speed": 9.8,
          "deg": 260,
          "gust": 11.8
        },
        "sys": {
          "country": ""
        },
        "rain": null,
        "snow": null,
        "clouds": {
          "all": 75
        },
        "weather": [   //array[0]
          {
            "id": 521,
            "main": "Rain",
            "description": "proximity shower rain",
            "icon": "09d"
          }
        ]
      }
    ]  
}

console.log(weather.count);
console.log(weather.list[0].main.humidity);
console.log(weather.list[0].weather[0].description);
console.log(weather.list[1].wind.deg);
console.log(weather.list[1].sys.country);
console.log(weather.list[1].clouds.all);
console.log(weather.list[1].weather[0].icon);
