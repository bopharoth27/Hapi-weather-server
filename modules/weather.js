const Axios = require('axios');

const weatherApiKey = '767f1d248297a9f089f2219a7fe30f2c';
const weatherApiRoot = 'http://api.openweathermap.org/data/2.5';

async function getCurrentWeather(zip){
  const method = '/weather';
  const params = `?zip=${zip},us&units=imperial&appid=${weatherApiKey}`;

  const url = `${weatherApiRoot}${method}${params}`;

  let obj ={};
  try{
    const response = await Axios.get(url);
    obj = response.data;
  } catch (error){
    obj.error = error;
  }
  return obj;
}

module.exports = {
  getCurrent : getCurrentWeather
};
