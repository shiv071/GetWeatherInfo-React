import React, { useState } from 'react';

const Weather = (props)=> {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [showData, setShowData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cityName === '') {
      alert('Enter city name');
      setShowData(false);
    } else {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${props.appid}`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        setShowData(true);
        console.log(response);
      } catch (error) {
        alert('Enter correct city name');
        setShowData(false);
      }
    }
  };

  return (
    <div className="container-fluid main_header">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto" >
          <div className="main-content">
            <form className="temp-form" onSubmit={handleSubmit} >
              <input
                type="text"
                id="cityname"
                placeholder="Enter the city name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
              <input type="submit" value="Search" id="subbtn" />
            </form>
          </div>
          <div className="temp-Information">
            <div className="main-layer">
              <p id="city_name">
                {showData ? `${weatherData.name}, ${weatherData.sys.country}` : "Today's weather in your city is....."}
              </p>
              <div className={`middle_layer ${showData ? '' : 'data_hide'}`}>
                <p id="temp">
                  <span id="tempok">
                    {showData ? `${weatherData.main.temp}` : '0'}
                  </span>{' '}
                  <sup>o</sup>C
                </p>
                <p id="temp_status">
                  {showData && weatherData.weather[0] ? (
                    <i
                      className={
                        weatherData.weather[0].main === 'Clouds' 
                          ? 'fa fa-cloud': weatherData.weather[0].main === 'Rain'
                          ? 'fa fa-cloud-rain' : weatherData.weather[0].main === 'Clear'
                          ? 'fa fa-sun' : 'fa fa-cloud'
                      }
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i className="fa fa-cloud" aria-hidden="true"></i>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
