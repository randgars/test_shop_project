import axios from 'axios';

export default function getGeolocation(shop) {
  const key = 'AIzaSyAPJSXShKxjV-cmP3aqwDjlYMuN2P5MhDo';
  const address = shop.address.replace(/\s/g, '+');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
  return axios.get(url)
}
