import axiosInstance from '@/service/axios_client'
import { ref } from 'vue'


interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface GeolocationError {
  message: string;
}

const position = ref<GeolocationPosition | null>(null);
const error = ref<string | null>(null);

let lat = 0.00
let lng = 0.00

const handlePosition = async (pos: GeolocationPosition) => {
  position.value = {
    coords:{
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    }
  };
  lat = pos.coords.latitude;
  lng = pos.coords.longitude;
  await fetchLocationData(lat, lng);
};

const handleError = (err: GeolocationError) => {
  error.value = err.message;
};

const fetchLocationData = async (lat: any, long: any) => {
  try {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    const response: {data: any} =
      await axiosInstance('https://api.opencagedata.com', headers)
        .get(`/geocode/v1/json?q=${lat}%2C${long}&key=${import.meta.env.VITE_API_OPEN_CAGE_API_KEY}`)
    localStorage.setItem("location", response.data.results[0].formatted)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

async function initLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handlePosition, handleError);
  } else {
    error.value = "Geolocation is not supported by this browser.";
  }
}


export default initLocation;
